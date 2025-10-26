<script lang="tsx" setup>
import type { AutoCompleteProps } from 'antd-v';
import { AutoComplete } from 'antd-v';
import { ref } from 'vue';

const options = ref<AutoCompleteProps['options']>([]);
const handleSearch = (value: string) => {
  if (!value || value.includes('@')) {
    options.value = [];
  }
  options.value = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
    label: `${value}@${domain}`,
    value: `${value}@${domain}`,
  }));
};
</script>
<template>
  <AutoComplete
    :style="{ width: '200px' }"
    placeholder="input here"
    :show-search="{ onSearch: handleSearch }"
    :options="options"
  />
</template>
