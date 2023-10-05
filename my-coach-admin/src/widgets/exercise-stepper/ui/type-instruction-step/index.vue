<script setup lang="ts">
import { computed, toRefs, watch } from 'vue';
import { useForm } from 'vee-validate';

import { useExerciseTypesStore } from '@/entities/exercise-types';
import { useStepperExerciseStore } from '@/entities/stepper-exercise';
import { useTranslation } from '@/shared/lib/localization';
import RadioButtons from '@/shared/ui/radio-buttons';
import Textarea from '@/shared/ui/textarea';
import { instructionsValidationSchema } from './config';
import './styles.scss';

const { meta, values } = useForm({
  validationSchema: instructionsValidationSchema,
});

const { t } = useTranslation();

const { exercise, setType, setInstruction, setInstructionUk } = useStepperExerciseStore();

const { exerciseTypes } = useExerciseTypesStore();

const { instruction, instructionUk } = exercise;

const { typeId } = toRefs(exercise);

const isNextAvailable = computed<boolean>(() => meta.value.valid && !!exercise.typeId);

const emits = defineEmits(['disableNext']);

const updateInstructionValue = () => {
  setInstruction(values.exerciseInstruction);
};

const updateInstructionUkValue = () => {
  setInstructionUk(values.exerciseInstructionUk);
};

const updateIsNextAvailable = () => {
  emits('disableNext', isNextAvailable.value);
};

watch(isNextAvailable, updateIsNextAvailable, { immediate: true });
</script>

<template>
  <el-form label-position="top" class="form">
    <RadioButtons
      :label="t('labels.exercise.type')"
      :value="typeId"
      :options="exerciseTypes"
      @update-value="setType"
      :is-required="true"
    />
    <div class="textarea-group">
      <Textarea
        type="text"
        name="exerciseInstruction"
        :label="t('labels.exercise.instruction')"
        :value="instruction"
        @input="updateInstructionValue"
        :placeholder="t('placeholders.exercise.instruction')"
        :is-required="true"
        :rows="4"
      />
      <Textarea
        type="text"
        name="exerciseInstructionUk"
        :label="t('labels.exercise.instructionUk')"
        :value="instructionUk"
        @input="updateInstructionUkValue"
        :placeholder="t('placeholders.exercise.instructionUk')"
        :is-required="true"
        :rows="4"
      />
    </div>
  </el-form>
</template>
