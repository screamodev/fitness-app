import { Module } from '@nestjs/common';

import { PrismaModule } from 'db/prisma.module';
import { MusclesRepository } from './repositories/muscles.repository';
import { MusclesResolver } from './resolvers/muscles.resolver';
import { MusclesService } from './services/muscles.service';

@Module({
  imports: [PrismaModule],
  providers: [MusclesService, MusclesRepository, MusclesResolver],
  exports: [MusclesService],
})
export class MusclesModule {}
