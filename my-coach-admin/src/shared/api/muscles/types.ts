export interface Muscle {
  id: string;
  name: string;
  nameUk: string;
  isPrimary?: boolean;
}

export interface CreateMuscleData {
  id: number;
  isPrimary?: boolean;
}

export interface GetMusclesResponse {
  getMuscles: Muscle[];
}
