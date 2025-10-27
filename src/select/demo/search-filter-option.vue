<template>
  <Select
    :show-search="{
      filterOption: (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
    }"
    placeholder="Select a person"
    :options="[
      { value: '1', label: 'Jack' },
      { value: '2', label: 'Lucy' },
      { value: '3', label: 'Tom' },
    ]"
  />
</template>

<script setup lang="ts">
import { Select } from 'antd-v';
</script>
