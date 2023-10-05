import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { Exercise } from 'exercises/entities/exercise.entity';

@ObjectType()
export class Set {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  reps?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field({ nullable: true })
  time?: number;

  @HideField()
  exerciseId: number;

  @Field(() => Exercise)
  exercise: Exercise;
}
