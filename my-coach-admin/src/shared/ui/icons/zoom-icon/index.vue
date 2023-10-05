<script setup lang="ts">
import { ZoomIn as Zoom } from '@element-plus/icons-vue';

import { Colors } from '@/shared/config/colors';

interface Props {
  color?: string;
}

withDefaults(defineProps<Props>(), {
  color: Colors.orange,
});
</script>

<template>
  <el-icon :color="color" size="20"><Zoom /></el-icon>
</template>
