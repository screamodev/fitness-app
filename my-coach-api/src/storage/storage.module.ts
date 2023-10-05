import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { StorageConfig } from './config/storage.config';
import { StorageService } from './services/storage.service';

@Module({
  imports: [ConfigModule],
  providers: [StorageConfig, StorageService],
  exports: [StorageService],
})
export class StorageModule {}
