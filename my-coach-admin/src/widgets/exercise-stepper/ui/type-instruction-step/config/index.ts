import * as Yup from 'yup';

const instructionValidationSchema = Yup.string().max(400, 'errors.exercise.instruction.maxLength');

export const instructionsValidationSchema = Yup.object({
  exerciseInstruction: instructionValidationSchema,
  exerciseInstructionUk: instructionValidationSchema,
});
