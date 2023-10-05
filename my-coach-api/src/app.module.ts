import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';

import { ExercisesModule } from 'exercises/exercises.module';
import { SetsModule } from 'sets/sets.module';
import { TrainingsModule } from 'trainings/trainings.module';
import { AuthModule } from 'auth/auth.module';
import { GqlAuthGuard } from 'auth/guards/gql-auth.guard';
import { RolesGuard } from 'auth/guards/roles.guard';
import { PrismaModule } from 'db/prisma.module';
import { ExerciseTypesModule } from 'exercise-types/exercise-types.module';
import { MediasModule } from 'medias/medias.module';
import { MusclesModule } from 'muscles/muscles.module';
import { StorageModule } from 'storage/storage.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async () => {
        return {
          autoSchemaFile: 'schema.gql',
          sortSchema: true,
          transformAutoSchemaFile: false,
          uploads: false,
          cors: true,
          playground: true,
          introspection: true,
        } as GqlModuleOptions;
      },
      inject: [ConfigService],
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    MediasModule,
    StorageModule,
    TrainingsModule,
    ExerciseTypesModule,
    ExercisesModule,
    MusclesModule,
    SetsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
