<template>
  <Space vertical>
    <DatePicker />
    <DatePicker picker="week" />
    <DatePicker picker="month" />
    <DatePicker picker="quarter" />
    <DatePicker picker="year" />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space } from 'antd-v';
</script>