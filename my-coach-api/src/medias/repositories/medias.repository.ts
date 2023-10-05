import { Injectable } from '@nestjs/common';

import { PrismaService } from 'db/services/prisma.service';

@Injectable()
export class MediasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(mediaId: number) {
    return this.prisma.media.findUnique({
      where: {
        id: mediaId,
      },
    });
  }

  async delete(mediaId: number) {
    return this.prisma.media.delete({
      where: {
        id: mediaId,
      },
    });
  }
}
