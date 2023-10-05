import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExerciseType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  nameUk: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
