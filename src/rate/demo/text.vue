<template>
  <Flex gap="middle" vertical>
    <Rate v-model:value="value" :tooltips="desc" />
    <span v-if="value">{{ getDescTitle(value, desc) }}</span>
  </Flex>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Flex, Rate } from 'antd-v';

const desc = [
  'terrible',
  { placement: 'top', title: 'bad', trigger: 'hover' },
  'normal',
  'good',
  'wonderful',
];

function getDescTitle(value: number, desc: any) {
  const item = desc?.[value - 1];
  return typeof item === 'object' ? item.title : item;
}

const value = ref(3);
</script>
