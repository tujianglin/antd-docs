<template>
  <AutoComplete
    v-model:value="value"
    :style="{ width: '200px' }"
    :options="options"
    placeholder="try to type `b`"
    :show-search="{
      filterOption: (inputValue: string, option: any) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AutoComplete } from 'antd-v';

const value = ref('');
const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];
</script>

