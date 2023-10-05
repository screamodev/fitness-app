import { Field, HideField, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

import { PaginationInput } from 'common/inputs/pagination.input';

@InputType()
export class GetExercisesInput extends PaginationInput {
  @HideField()
  @Field(() => [Int], { nullable: true })
  exercisesIds?: number[];

  @IsOptional()
  @Field(() => [Int], { nullable: true })
  typesIds?: number[];

  @IsOptional()
  @Field(() => [Int], { nullable: true })
  musclesIds?: number[];

  @IsOptional()
  @Field({ nullable: true })
  searchQuery?: string;
}
