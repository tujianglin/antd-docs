<template>
  <Space vertical>
    <Mentions default-value="@afc163" status="error" :options="options" />
    <Mentions default-value="@afc163" status="warning" :options="options" />
  </Space>
</template>

<script setup lang="ts">
import { Mentions, Space } from 'antd-v';

const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
  {
    value: 'yesmeck',
    label: 'yesmeck',
  },
];
</script>