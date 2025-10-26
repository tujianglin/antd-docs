<template>
  <Space vertical :size="12">
    <ControlledDatePicker />
    <ControlledRangePicker />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Space } from 'antd-v';
import type { Dayjs } from 'dayjs';

const RangePicker = DatePicker.RangePicker;

type RangeValue = [Dayjs | null | undefined, Dayjs | null | undefined] | null;

const ControlledDatePicker = () => {
  const mode = ref('time');

  const handleOpenChange = (open: boolean) => {
    if (open) {
      mode.value = 'time';
    }
  };

  const handlePanelChange = (_: any, newMode: any) => {
    mode.value = newMode;
  };

  return (
    <DatePicker v-model:mode="mode" show-time @open-change="handleOpenChange" @panel-change="handlePanelChange" />
  );
};

const ControlledRangePicker = () => {
  const mode = ref(['month', 'month']);
  const value = ref<RangeValue>([null, null]);

  const handlePanelChange = (newValue: any, newModes: any) => {
    value.value = newValue;
    mode.value = [
      newModes[0] === 'date' ? 'month' : newModes[0],
      newModes[1] === 'date' ? 'month' : newModes[1],
    ];
  };

  return (
    <RangePicker
      placeholder="['Start month', 'End month']"
      format="YYYY-MM"
      v-model:value="value"
      v-model:mode="mode"
      @panel-change="handlePanelChange"
    />
  );
};
</script>
