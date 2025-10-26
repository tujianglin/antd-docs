<template>
  <AutoComplete
    v-model:value="value"
    :options="options"
    :style="{ width: '200px' }"
    @select="onSelect"
    :show-search="{ onSearch: handleSearch }"
  >
    <TextArea
      v-model:value="value"
      placeholder="input here"
      class="custom"
      :style="{ height: '50px' }"
      @keypress="handleKeyPress"
    />
  </AutoComplete>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AutoComplete, Input } from 'antd-v';

const { TextArea } = Input;

const value = ref('');
const options = ref<any[]>([]);

const handleSearch = (value: string) => {
  options.value = !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }];
};

const handleKeyPress = (ev: KeyboardEvent) => {
  console.log('handleKeyPress', ev);
};

const onSelect = (value: string) => {
  console.log('onSelect', value);
};
</script>

<style scoped>
.custom {
  /* 自定义样式 */
}
</style>

