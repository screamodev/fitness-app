import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { ExerciseType } from 'exercise-types/entities/exercise-type.entity';
import { Media } from 'medias/entities/media.entity';
import { Muscle } from 'muscles/entities/muscle.entity';

@ObjectType()
export class Exercise {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  nameUk: string;

  @HideField()
  typeId: number;

  @HideField()
  primaryImageId?: number;

  @Field({ nullable: true })
  instruction?: string;

  @Field({ nullable: true })
  instructionUk?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Media, { nullable: true })
  primaryImage?: Media;

  @Field()
  type: ExerciseType;

  @Field(() => [Media], { nullable: true })
  medias?: Media[];

  @Field(() => [Muscle])
  muscles: Muscle[];
}
