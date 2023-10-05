<script lang="ts" setup>
import type { Muscle } from '@/shared/api/muscles';
import { ExercisesTable } from '@/shared/config/exercises-table';
import { TagSize, TagType } from '@/shared/config/tag';
import { useWindowSize } from '@/shared/lib/layout';
import { getLocaleSuffix, useTranslation } from '@/shared/lib/localization';
import { ActionsDropdown } from '@/shared/ui/actions-dropdown';
import type { Action } from '@/shared/ui/actions-dropdown';
import { DetailsIcon } from '@/shared/ui/icons';
import { Tag } from '@/shared/ui/tag';
import './styles.scss';

interface Props {
  id: string;
  name: string;
  nameUk: string;
  actions: Action[];
  onClick: (id: number) => void;
}

defineProps<Props>();

const { t, locale } = useTranslation();

const { isLgScreen } = useWindowSize();
</script>

<template>
  <el-table-column :width="ExercisesTable.width.imagesColumn">
    <template #default="{ row }">
      <img
        alt="exercise-image"
        class="exercise-image"
        :src="row.primaryImage?.url ?? '/images/exercise-placeholder.png'"
      />
    </template>
  </el-table-column>
  <el-table-column
    :label="t('exercise.name')"
    sortable
    :min-width="ExercisesTable.minWidth.namesColumn"
  >
    <template #default="{ row }">
      <el-link @click="onClick(row.id)" :underline="false" class="names-column">
        {{ `${row.name}/${row[nameUk]}` }}
      </el-link>
    </template>
  </el-table-column>
  <el-table-column
    :label="t('exercise.type')"
    sortable
    :min-width="ExercisesTable.minWidth.typesColumn"
  >
    <template #default="{ row }">
      <el-text class="type-column"> {{ row.type[`name${getLocaleSuffix(locale)}`] }} </el-text>
    </template>
  </el-table-column>
  <el-table-column
    :label="t('exercise.muscles')"
    sortable
    :min-width="ExercisesTable.minWidth.musclesColumn"
  >
    <template #default="{ row }">
      <div>
        <Tag
          v-for="muscle in row.muscles"
          :key="muscle.name"
          :text="String(muscle[`name${getLocaleSuffix(locale)}` as keyof Muscle])"
          :size="isLgScreen ? TagSize.small : TagSize.large"
          class="exercise-row-tag"
          :type="muscle.isPrimary ? TagType.primary : TagType.default"
        />
      </div>
    </template>
  </el-table-column>
  <el-table-column
    :min-width="ExercisesTable.minWidth.dropdownColumn"
    align="right"
    class-name="dropdown-column"
  >
    <ActionsDropdown :items="actions">
      <template v-slot:icon>
        <DetailsIcon />
      </template>
    </ActionsDropdown>
  </el-table-column>
</template>
