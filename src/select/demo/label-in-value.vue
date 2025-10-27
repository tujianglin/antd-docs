<template>
  <Select
    label-in-value
    :value="{ value: 'lucy', label: 'Lucy (101)' }"
    style="width: 120px"
    :options="[
      {
        value: 'jack',
        label: 'Jack (100)',
      },
      {
        value: 'lucy',
        label: 'Lucy (101)',
      },
    ]"
  />
</template>

<script setup lang="ts">
import { Select } from 'antd-v';
</script>
