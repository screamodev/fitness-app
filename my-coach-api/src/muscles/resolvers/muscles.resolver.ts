import { Query, Resolver } from '@nestjs/graphql';

import { Muscle } from '../entities/muscle.entity';
import { MusclesService } from '../services/muscles.service';

@Resolver('Muscles')
export class MusclesResolver {
  constructor(private readonly musclesService: MusclesService) {}

  @Query(() => [Muscle])
  async getMuscles(): Promise<Muscle[]> {
    return await this.musclesService.findAll();
  }
}
