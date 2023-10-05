export enum Gender {
  male = 'male',
  female = 'female',
}

export enum Role {
  trainee = 'trainee',
  coach = 'coach',
}

export const userLimits = {
  fullName: { min: 1, max: 50 },
  username: { min: 3, max: 30 },
  weight: { min: 30, max: 250 },
  height: { min: 70, max: 250 },
};
