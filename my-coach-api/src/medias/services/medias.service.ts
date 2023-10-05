import { Stream } from 'stream';
import { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { MediaType } from '@prisma/client';

import { BufferWithType } from 'common/entities/buffer-with-type.entity';
import { PrismaService } from 'db/services/prisma.service';
import { FileName } from 'medias/constants/file-name.constants';
import { MediasRepository } from 'medias/repositories/medias.repository';
import { StorageService } from 'storage/services/storage.service';
import { mediaConfig } from 'users/config/media.config';
import { MediaSizeLimits } from '../constants/media-size-limits.constant';
import { Media } from '../entities/media.entity';
import { IMediaConfig } from '../interfaces/media-config.interface';
import { UploadedFile } from '../interfaces/uploaded-file.interface';

@Injectable()
export class MediasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
    private readonly mediasRepository: MediasRepository,
  ) {}

  async createMedia(
    file: Promise<UploadedFile>,
    fieldId: number,
    config: IMediaConfig,
  ): Promise<Media> {
    const { mediaRepository, field, selectedMediaField, repository } = config;

    const { filename, mimetype } = await file;

    const mediaFile = await this.createMediaFromStream(file);

    const mediaType =
      mimetype.split('/')[0] === MediaType.image
        ? MediaType.image
        : MediaType.video;

    return this.prisma.$transaction(async (prismaClient) => {
      const media = await this.prisma.media.create({
        data: {
          key: mediaFile.Key,
          name: filename,
          mimeType: mimetype,
          type: mediaType,
        },
      });

      const mediaRelationship = await prismaClient[mediaRepository].create({
        data: {
          [field]: fieldId,
          mediaId: media.id,
        },
      });

      await prismaClient[repository].update({
        where: { id: fieldId },
        data: {
          [selectedMediaField]: mediaRelationship.id,
        },
      });

      return mediaRelationship;
    });
  }

  async createGeneratedAvatar(
    generatedAvatar: BufferWithType,
    userId: number,
  ): Promise<Media> {
    const uploadedAvatar = await this.storageService.uploadFile(
      generatedAvatar,
    );

    const { ContentType } = uploadedAvatar;

    const media = await this.prisma.media.create({
      data: {
        key: uploadedAvatar.Key,
        name: FileName.Avatar,
        mimeType: ContentType,
        type: MediaType.image,
      },
    });

    const mediaRelationship = await this.prisma.userAvatar.create({
      data: {
        userId,
        mediaId: media.id,
      },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        selectedAvatarId: mediaRelationship.id,
      },
    });

    return await this.findOne(mediaRelationship.id, mediaConfig);
  }

  async createMediaFiles(
    fieldId: number,
    config: IMediaConfig,
    files: Promise<UploadedFile>[],
  ): Promise<Media[]> {
    const { mediaRepository, field } = config;

    const uploadedMedias: Media[] = [];

    const mediaFiles = [];

    for (const file of files) {
      const { filename, mimetype } = await file;

      const mediaFile = await this.createMediaFromStream(file);

      mediaFiles.push({
        filename,
        mimetype,
        mediaFile,
      });
    }

    await this.prisma.$transaction(async (prismaClient) => {
      for (const { filename, mimetype, mediaFile } of mediaFiles) {
        const mediaType =
          mimetype.split('/')[0] === MediaType.image
            ? MediaType.image
            : MediaType.video;

        const media = await this.prisma.media.create({
          data: {
            key: mediaFile.Key,
            name: filename,
            mimeType: mimetype,
            type: mediaType,
          },
        });

        const mediaRelationship = await prismaClient[mediaRepository].create({
          data: {
            [field]: fieldId,
            mediaId: media.id,
          },
        });

        uploadedMedias.push(mediaRelationship);
      }
    });

    return uploadedMedias;
  }

  async findOne(id: number, config): Promise<Media> {
    const { mediaRepository } = config;

    const currentMedia = await this.prisma[mediaRepository].findUnique({
      where: {
        id,
      },
    });

    const media = await this.prisma.media.findUnique({
      where: {
        id: currentMedia.mediaId,
      },
    });

    const url = await this.storageService.getFileUrl(media.key);

    return { ...media, url };
  }

  async deleteMedia(mediaId: number): Promise<boolean> {
    const media = await this.mediasRepository.findById(mediaId);

    const deletedMedia = await this.mediasRepository.delete(mediaId);

    await this.storageService.deleteFile(media.key);

    return !!deletedMedia;
  }

  async streamToBuffer(stream: Stream): Promise<Buffer> {
    return new Promise((resolve) => {
      const buffer = [];

      stream.on('data', (data) => {
        buffer.push(data);
      });
      stream.on('end', () => {
        resolve(Buffer.concat(buffer));
      });
    });
  }

  async createMediaFromStream(
    file: Promise<UploadedFile>,
  ): Promise<PutObjectCommandInput> {
    const { mimetype, createReadStream } = await file;

    const buffer = await this.streamToBuffer(createReadStream());

    if (
      (mimetype.split('/')[0] === MediaType.image &&
        buffer.length > MediaSizeLimits.imageMb.max) ||
      (mimetype.split('/')[0] === MediaType.video &&
        buffer.length > MediaSizeLimits.videoMb.max)
    ) {
      throw new Error(
        'File size exceeds the allowed limit for ' +
          (mimetype.split('/')[0] === MediaType.image
            ? 'image (5 MB)'
            : 'video (100 MB)'),
      );
    }

    try {
      const buffer = await this.streamToBuffer(createReadStream());

      return await this.storageService.uploadFile(
        new BufferWithType(buffer, mimetype),
      );
    } catch (error) {
      throw new Error('Failed to upload file');
    }
  }
}
