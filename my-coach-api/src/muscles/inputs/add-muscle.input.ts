import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class AddMuscleInput {
  @Field()
  id: number;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isPrimary?: boolean;
}
