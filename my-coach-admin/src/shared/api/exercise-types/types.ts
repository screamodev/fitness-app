export interface ExerciseType {
  id: string;
  name: string;
  nameUk: string;
}

export interface GetExerciseTypesResponse {
  getExerciseTypes: ExerciseType[];
}
