<script lang="tsx" setup>
import type { AutoCompleteProps } from 'antd-v';
import { AutoComplete } from 'antd-v';
import { ref } from 'vue';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const value = ref('');
const options = ref<AutoCompleteProps['options']>([]);
const anotherOptions = ref<AutoCompleteProps['options']>([]);

const getPanelValue = (searchText: string) =>
  !searchText
    ? []
    : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
</script>
<template>
  <AutoComplete
    :options="options"
    :style="{ width: '200px' }"
    :show-search="{
      onSearch: (text) => (options = getPanelValue(text)),
    }"
    placeholder="input here"
  />
  <br />
  <br />
  <AutoComplete
    v-model:value="value"
    :show-search="{
      onSearch: (text) => (anotherOptions = getPanelValue(text)),
    }"
    :options="anotherOptions"
    :style="{ width: '200px' }"
    placeholder="control mode"
  />
</template>
