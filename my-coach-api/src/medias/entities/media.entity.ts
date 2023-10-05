import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { MediaType } from '@prisma/client';

@ObjectType()
export class Media {
  @Field(() => ID)
  id: number;

  @HideField()
  key: string;

  @Field()
  url: string;

  @HideField()
  name: string;

  @HideField()
  mimeType?: string;

  @Field()
  type: MediaType;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
