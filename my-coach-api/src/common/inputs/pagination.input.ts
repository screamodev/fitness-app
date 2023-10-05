import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class PaginationInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  size?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  page?: number;
}
