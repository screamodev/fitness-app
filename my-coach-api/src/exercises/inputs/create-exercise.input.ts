import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMaxSize,
  IsNotEmpty,
  IsOptional,
  Validate,
} from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { IsImage } from 'common/validators/is-image.validator';
import { IsVideo } from 'common/validators/is-video.validator';
import { UploadedFile } from 'medias/interfaces/uploaded-file.interface';
import { AddMuscleInput } from 'muscles/inputs/add-muscle.input';

@InputType()
export class CreateExerciseInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  nameUk: string;

  @IsNotEmpty()
  @Field()
  typeId: string;

  @IsOptional()
  @Field({ nullable: true })
  instruction?: string;

  @IsOptional()
  @Field({ nullable: true })
  instructionUk?: string;

  @Field(() => GraphQLUpload, { nullable: true })
  @IsImage({ message: 'Primary image must be an image file' })
  primaryImage?: Promise<UploadedFile>;

  @Field(() => GraphQLUpload, { nullable: true })
  @IsVideo({ message: 'File must be a video file' })
  video?: Promise<UploadedFile>;

  @Field(() => [GraphQLUpload], { nullable: true })
  @ArrayMaxSize(5)
  @Validate(IsImage({ message: 'Images must be an array of image files' }), {
    each: true,
  })
  images?: Promise<UploadedFile>[];

  @Field(() => [AddMuscleInput])
  muscles: AddMuscleInput[];
}
