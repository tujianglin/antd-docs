<template>
  <Select
    :label-render="labelRender"
    :value="'1'"
    style="width: 100%"
    :options="options"
  />
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Select } from 'antd-v';

const options = [
  { label: 'gold', value: 'gold' },
  { label: 'lime', value: 'lime' },
  { label: 'green', value: 'green' },
  { label: 'cyan', value: 'cyan' },
];

const labelRender = (props: any) => {
  const { label, value } = props;

  if (label) {
    return value;
  }
  return h('span', {}, 'No option match');
};
</script>
