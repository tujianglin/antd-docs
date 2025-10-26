<template>
  <Space vertical :size="12">
    <DatePicker :render-extra-footer="() => 'extra footer'" />
    <DatePicker :render-extra-footer="() => 'extra footer'" show-time />
    <RangePicker :render-extra-footer="() => 'extra footer'" />
    <RangePicker :render-extra-footer="() => 'extra footer'" show-time />
    <DatePicker :render-extra-footer="() => 'extra footer'" picker="month" />
  </Space>
</template>

<script setup lang="ts">
import { DatePicker, Space } from 'antd-v';

const RangePicker = DatePicker.RangePicker;
</script>
