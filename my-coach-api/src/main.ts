import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

import { AppModule } from './app.module';
import { PrismaService } from './db/services/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 5001;

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  app.use(graphqlUploadExpress());

  await setupPrisma(app);

  await app.listen(PORT, () => {
    console.log(`Application is running on: ${PORT}...`);
    console.log(`GraphQL Playground: ${PORT}/graphql`);
  });
}

bootstrap();

async function setupPrisma(app: INestApplication) {
  const prismaService = app.get(PrismaService);

  await prismaService.enableShutdownHooks(app);
}
