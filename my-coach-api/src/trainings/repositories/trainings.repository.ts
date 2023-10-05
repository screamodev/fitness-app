import { Injectable } from '@nestjs/common';
import { Prisma, Training } from '@prisma/client';

import { PrismaService } from 'db/services/prisma.service';

@Injectable()
export class TrainingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TrainingCreateInput): Promise<Training> {
    return this.prisma.training.create({
      data,
    });
  }
}
