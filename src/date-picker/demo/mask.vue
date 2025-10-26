<template>
  <Space vertical>
    <DatePicker
      :format="{
        format: 'YYYY-MM-DD',
        type: 'mask',
      }"
    />
    <DatePicker
      :format="{
        format: 'YYYY-MM-DD HH:mm:ss',
        type: 'mask',
      }"
    />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space } from 'antd-v';
</script>
