import { ref } from 'vue';

export const usePagination = (initPageSize = 10) => {
  const page = ref<number>(1);

  const totalItems = ref<number>(0);

  const pageSize = ref<number>(initPageSize);

  return {
    page,
    totalItems,
    pageSize,
  };
};
