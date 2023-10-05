import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddExercisesInput {
  @Field()
  id: number;
}
