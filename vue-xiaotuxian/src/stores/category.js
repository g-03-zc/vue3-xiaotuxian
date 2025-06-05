import { defineStore } from 'pinia';
import { ref } from 'vue'
import { getCategory } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
  const resdata = ref()

  const categoryDate = async () => {
  const res = await getCategory()
  resdata.value = res.result
}

return {
  resdata,
  categoryDate
}
});