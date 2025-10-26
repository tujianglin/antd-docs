<template>
  <Space vertical :size="12">
    <RangePicker />
    <RangePicker show-time />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker
      picker="year"
      :id="{
        start: 'startInput',
        end: 'endInput',
      }"
    />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space } from 'antd-v';

const RangePicker = DatePicker.RangePicker;
</script>
