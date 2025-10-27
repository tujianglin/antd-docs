<template>
  <Space vertical>
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
</template>

<script setup lang="ts">
import { TimePicker, Space } from 'antd-v';
</script>