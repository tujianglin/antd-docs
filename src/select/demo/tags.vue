<template>
  <Select
    mode="tags"
    style="width: 100%"
    placeholder="Tags Mode"
    :options="options"
  />
</template>

<script setup lang="ts">
import { Select } from 'antd-v';

const options: any[] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
</script>
