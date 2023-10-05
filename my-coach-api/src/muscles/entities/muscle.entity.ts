import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
export class Muscle {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  nameUk: string;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isPrimary?: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
