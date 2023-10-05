import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateSetInput } from 'trainings/inputs/create-set.input';

@InputType()
export class CreateTrainingInput {
  @IsNotEmpty()
  @Field()
  appointedAt: Date;

  @IsNotEmpty()
  @Field(() => [CreateSetInput])
  sets: CreateSetInput[];
}
