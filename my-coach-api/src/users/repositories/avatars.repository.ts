import { Injectable } from '@nestjs/common';

import { PrismaService } from 'db/services/prisma.service';

@Injectable()
export class AvatarsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserId(userId: number) {
    return this.prisma.userAvatar.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        media: {
          select: {
            key: true,
            name: true,
            type: true,
          },
        },
      },
    });
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.prisma.userAvatar.delete({
      where: { id },
    });

    return !!result;
  }
}
