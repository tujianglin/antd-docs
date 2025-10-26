<template>
  <Space vertical :style="{ width: '100%' }">
    <AutoComplete
      v-model:value="value1"
      :options="options"
      :show-search="{ onSearch: handleSearch1 }"
      status="error"
      :style="{ width: '200px' }"
    />
    <AutoComplete
      v-model:value="value2"
      :options="anotherOptions"
      :show-search="{ onSearch: handleSearch2 }"
      status="warning"
      :style="{ width: '200px' }"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Space, AutoComplete } from 'antd-v';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const options = ref<any[]>([]);
const anotherOptions = ref<any[]>([]);

const value1 = ref('');
const value2 = ref('');

const getPanelValue = (searchText: string) =>
  !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

const handleSearch1 = (text: string) => {
  options.value = getPanelValue(text);
};

const handleSearch2 = (text: string) => {
  anotherOptions.value = getPanelValue(text);
};
</script>

