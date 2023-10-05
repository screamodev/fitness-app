import { Injectable } from '@nestjs/common';
import { createCanvas } from 'canvas';

import { BufferWithType } from 'common/entities/buffer-with-type.entity';
import { generateColor } from 'common/helpers/color.helper';
import { generateInitials } from 'common/helpers/name.helper';
import { CanvasConfig } from '../config/canvas.config';
import { MimeType } from '../constants/mime-type.constant';

@Injectable()
export class CanvasService {
  constructor(private readonly mediaConfig: CanvasConfig) {}

  async createAvatar(fullName: string): Promise<BufferWithType> {
    const { width, height, x, y } = this.mediaConfig.getCanvasSizes();

    const canvas = createCanvas(width, height);

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = generateColor();

    ctx.fillRect(x, y, width, height);

    const canvasConfig = this.mediaConfig.getCanvasConfig();

    for (const style in canvasConfig) {
      ctx[style] = canvasConfig[style];
    }

    const nameInitials = generateInitials(fullName);

    ctx.fillText(nameInitials, width / 2, height / 2);

    const buffer = canvas.toBuffer(MimeType.png);

    return new BufferWithType(buffer, MimeType.png);
  }
}
