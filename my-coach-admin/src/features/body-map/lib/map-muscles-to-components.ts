import { toRefs } from 'vue';

import { useMusclesStore } from '@/entities/muscles';
import type { BodyPart } from '../config';

const musclesStore = useMusclesStore();

const { mappedMusclesByName } = toRefs(musclesStore);

export const mapMusclesToComponents = (bodyParts: BodyPart[]) => {
  return bodyParts.map((bodyPart) => {
    const currentMuscle = mappedMusclesByName.value.get(bodyPart.name);

    return { component: bodyPart.component, id: currentMuscle ? currentMuscle.id : '' };
  });
};
