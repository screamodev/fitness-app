import { Module } from '@nestjs/common';

import { SetsRepository } from 'sets/repositories/sets.repository';
import { PrismaModule } from 'db/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SetsRepository],
  exports: [SetsRepository],
})
export class SetsModule {}
