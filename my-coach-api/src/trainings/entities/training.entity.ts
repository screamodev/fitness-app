import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

import { Set } from 'sets/entities/set.entity';
import { User } from 'users/entities/user.entity';

@ObjectType()
export class Training {
  @Field(() => ID)
  id: number;

  @Field()
  appointedAt: Date;

  @HideField()
  ownerId: number;

  @Field(() => [Set])
  sets: Set[];

  @Field(() => User)
  owner: User;
}
