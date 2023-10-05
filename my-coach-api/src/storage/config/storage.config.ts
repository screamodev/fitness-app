import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommandInput,
  S3ClientConfig,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

import { BufferWithType } from 'common/entities/buffer-with-type.entity';

@Injectable()
export class StorageConfig {
  constructor(private readonly configService: ConfigService) {}

  getConfig(): S3ClientConfig {
    return {
      region: this.configService.get<string>('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get<string>(
          'AWS_SECRET_ACCESS_KEY',
        ),
      },
    };
  }

  async getFileParams(file: BufferWithType): Promise<PutObjectCommandInput> {
    return {
      Bucket: this.configService.get<string>('AWS_BUCKET_NAME'),
      Key: `${uuid()}`,
      Body: file.buffer,
      ContentType: file.fileType,
      Metadata: {
        'Cache-Control': 'max-age=31536000',
      },
    };
  }

  getFileConfig(key: string): GetObjectCommand {
    return new GetObjectCommand({
      Bucket: this.configService.get<string>('AWS_BUCKET_NAME'),
      Key: key,
    });
  }

  getDeleteFileConfig(key: string): DeleteObjectCommand {
    return new DeleteObjectCommand({
      Bucket: this.configService.get<string>('AWS_BUCKET_NAME'),
      Key: key,
    });
  }
}
