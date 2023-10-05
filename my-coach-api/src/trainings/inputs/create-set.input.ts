import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateSetInput {
  @Field(() => Int)
  exerciseId: number;

  @IsOptional()
  @Field({ nullable: true })
  reps?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field({ nullable: true })
  time?: number;
}
