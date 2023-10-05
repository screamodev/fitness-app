import { Module } from '@nestjs/common';

import { PrismaModule } from 'db/prisma.module';
import { MediasRepository } from 'medias/repositories/medias.repository';
import { StorageModule } from 'storage/storage.module';
import { AvatarsRepository } from 'users/repositories/avatars.repository';
import { CanvasConfig } from './config/canvas.config';
import { CanvasService } from './services/canvas.service';
import { MediasService } from './services/medias.service';

@Module({
  imports: [PrismaModule, StorageModule],
  providers: [
    MediasService,
    CanvasService,
    CanvasConfig,
    MediasRepository,
    AvatarsRepository,
  ],
  exports: [MediasService, CanvasService],
})
export class MediasModule {}
