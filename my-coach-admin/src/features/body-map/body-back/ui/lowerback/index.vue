<script setup lang="ts">
import { getMuscleClass } from '../../../lib';

interface Props {
  id: string;
  isMainSelected: boolean;
  isAdditionalSelected: boolean;
  selectMuscle?: (id: string) => void;
}

defineProps<Props>();
</script>

<template>
  <g
    :class="getMuscleClass(isMainSelected, isAdditionalSelected)"
    fill=""
    @click="selectMuscle && selectMuscle(id)"
  >
    <path
      :id="id"
      d="M378.772 505.052C366.957 502.464 351.674 502.97 340.251 511.465C332.897 516.937 327.982 524.988 325.595 535.522C323.216 524.988 318.311 516.946 310.957 511.465C299.534 502.961 284.26 502.464 272.436 505.052C278.465 497.576 278.012 486.885 277.542 475.75C277.036 463.856 276.479 450.351 283.101 437.717C303.472 398.873 312.891 375.574 311.471 351.9C316.237 364.656 319.557 370.581 325.586 370.581C331.616 370.581 334.936 364.656 339.684 351.918C338.29 375.591 347.718 398.864 368.072 437.717C374.694 450.351 374.136 463.856 373.631 475.75C373.178 486.894 372.725 497.585 378.754 505.052H378.772Z"
    ></path>
  </g>
</template>
