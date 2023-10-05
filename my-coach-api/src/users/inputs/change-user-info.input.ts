import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { IsImage } from 'common/validators/is-image.validator';
import { UploadedFile } from 'medias/interfaces/uploaded-file.interface';

@InputType()
export class ChangeUserInfo {
  @IsOptional()
  @MinLength(3)
  @Field({ nullable: true })
  fullName?: string;

  @IsOptional()
  @Field({ nullable: true })
  username?: string;

  @IsOptional()
  @IsEmail()
  @Field({ nullable: true })
  email?: string;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(70, { message: 'Height must be at least 70' })
  @Max(250, { message: 'Height must be at most 250' })
  @Field({ nullable: true })
  height?: number;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(30, { message: 'Weight must be at least 30' })
  @Max(250, { message: 'Weight must be at most 250' })
  @Field({ nullable: true })
  weight?: number;

  @IsOptional()
  @IsImage({ message: 'Avatar must be an image file' })
  @Field(() => GraphQLUpload, { nullable: true })
  avatar?: Promise<UploadedFile>;
}
