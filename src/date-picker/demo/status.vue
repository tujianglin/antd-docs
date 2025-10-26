<template>
  <Space vertical style="width: 100%">
    <DatePicker status="error" style="width: 100%" />
    <DatePicker status="warning" style="width: 100%" />
    <DatePicker.RangePicker status="error" style="width: 100%" />
    <DatePicker.RangePicker status="warning" style="width: 100%" />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space } from 'antd-v';
</script>
