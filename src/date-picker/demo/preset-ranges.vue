<template>
  <Space vertical :size="12">
    <DatePicker
      :presets="[
        { label: 'Yesterday', value: dayjs().add(-1, 'd') },
        { label: 'Last Week', value: dayjs().add(-7, 'd') },
        { label: 'Last Month', value: dayjs().add(-1, 'month') },
      ]"
    />
    <RangePicker :presets="rangePresets" />
    <RangePicker
      :presets="[
        {
          label: h(
            'span',
            { 'aria-label': 'Current Time to End of Day' },
            'Now ~ EOD',
          ),
          value: () => [dayjs(), dayjs().endOf('day')],
        },
        ...rangePresets,
      ]"
      show-time
      format="YYYY/MM/DD HH:mm:ss"
    />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { DatePicker, Space } from 'antd-v';
import dayjs from 'dayjs';

const RangePicker = DatePicker.RangePicker;

const rangePresets = [
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
];
</script>
