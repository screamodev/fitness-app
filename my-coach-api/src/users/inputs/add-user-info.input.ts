import { Field, InputType } from '@nestjs/graphql';
import { Gender, Role } from '@prisma/client';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { IsImage } from 'common/validators/is-image.validator';
import { UploadedFile } from 'medias/interfaces/uploaded-file.interface';

@InputType()
export class AddUserInfo {
  @IsNotEmpty()
  @IsIn([Gender.female, Gender.male], {
    message: 'Gender must be either female or male',
  })
  @Field()
  gender: Gender;

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

  @IsNotEmpty()
  @IsIn([Role.trainee, Role.coach], {
    message: 'Role must be either trainee or coach',
  })
  @Field()
  role: Role;

  @IsNotEmpty()
  @Field()
  username: string;

  @Field(() => GraphQLUpload, { nullable: true })
  @IsImage({ message: 'Avatar must be an image file' })
  avatar: Promise<UploadedFile>;
}
