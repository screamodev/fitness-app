<script setup lang="ts">
import './styles.scss';

interface Props {
  total: number;
  pageSize: number;
  onSelectPage: (page: number) => void;
}

defineProps<Props>();
</script>

<template>
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    @current-change="onSelectPage"
  />
</template>
