<template>
  <AutoComplete
    v-model:value="value"
    :style="{ width: '200px' }"
    :show-search="{ onSearch: handleSearch }"
    placeholder="input here"
    :options="options"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AutoComplete } from 'antd-v';

const value = ref('');
const options = ref<any[]>([]);

const handleSearch = (value: string) => {
  options.value = (() => {
    if (!value || value.includes('@')) {
      return [];
    }
    return ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
      label: `${value}@${domain}`,
      value: `${value}@${domain}`,
    }));
  })();
};
</script>

