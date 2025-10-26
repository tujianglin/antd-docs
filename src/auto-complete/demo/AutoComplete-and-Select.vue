<template>
  <Flex vertical :gap="16">
    <Flex v-for="size in sizes" :key="size">
      <Select
        v-model:value="selectValue"
        :size="size"
        :style="{ width: '200px' }"
        :show-search="{ searchValue: 'centered' }"
      />
      <AutoComplete
        v-model:value="autoCompleteValue"
        :size="size"
        :style="{ width: 200 }"
      />
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AutoComplete, Flex, Select } from 'antd-v';
import { SizeType } from 'antd-v/dist/types/components/config-provider/SizeContext';

const sizes = ['small', 'middle', 'large'] as SizeType[];
const selectValue = ref('centered');
const autoCompleteValue = ref('centered');
</script>
