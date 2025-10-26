<template>
  <Space vertical>
    <ColorPicker
      :value="DEFAULT_COLOR"
      allow-clear
      show-text
      :mode="['single', 'gradient']"
    />
    <ColorPicker :value="DEFAULT_COLOR" allow-clear show-text mode="gradient" />
  </Space>
</template>

<script setup lang="ts">
import { ColorPicker, Space } from 'antd-v';

const DEFAULT_COLOR = [
  {
    color: 'rgb(16, 142, 233)',
    percent: 0,
  },
  {
    color: 'rgb(135, 208, 104)',
    percent: 100,
  },
];
</script>
