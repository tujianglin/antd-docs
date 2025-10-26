<template>
  <Space vertical :size="12">
    <DatePicker show-time />
    <RangePicker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm" />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space } from 'antd-v';

const RangePicker = DatePicker.RangePicker;
</script>
