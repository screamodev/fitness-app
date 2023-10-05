import PreviewStep from '../ui/preview-step';
import SelectMusclesStep from '../ui/select-muscles-step';
import TypeInstructionStep from '../ui/type-instruction-step';
import TypeMainInfoStep from '../ui/type-main-info-step';
import UploadMediaStep from '../ui/upload-media-step';

export const createExerciseSteps = [
  {
    transTitleKey: 'stepper.mainInfoStep.title',
    transDescriptionKey: 'stepper.mainInfoStep.description',
    component: TypeMainInfoStep,
  },
  {
    transTitleKey: 'stepper.selectMusclesStep.title',
    transDescriptionKey: 'stepper.selectMusclesStep.description',
    component: SelectMusclesStep,
  },
  {
    transTitleKey: 'stepper.instructionStep.title',
    transDescriptionKey: 'stepper.instructionStep.description',
    component: TypeInstructionStep,
  },
  {
    transTitleKey: 'stepper.uploadMediaStep.title',
    transDescriptionKey: 'stepper.uploadMediaStep.description',
    component: UploadMediaStep,
  },
  {
    transTitleKey: 'stepper.previewStep.title',
    transDescriptionKey: 'stepper.previewStep.description',
    component: PreviewStep,
  },
];
