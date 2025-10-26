<template>
  <Space>
    <DatePicker
      :disabled-date="disabledStartDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      v-model:value="startValue"
      placeholder="Start"
      @open-change="handleStartOpenChange"
    />
    <DatePicker
      :disabled-date="disabledEndDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      v-model:value="endValue"
      placeholder="End"
      :open="endOpen"
      @open-change="handleEndOpenChange"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Space } from 'antd-v';
import dayjs from 'dayjs';

const startValue = ref(dayjs());
const endValue = ref(dayjs());
const endOpen = ref(false);

const disabledStartDate = (startDate: any) => {
  if (!startDate || !endValue.value) {
    return false;
  }
  return startDate.valueOf() > endValue.value.valueOf();
};

const disabledEndDate = (endDate: any) => {
  if (!endDate || !startValue.value) {
    return false;
  }
  return endDate.valueOf() <= startValue.value.valueOf();
};

const handleStartOpenChange = (open: boolean) => {
  if (!open) {
    endOpen.value = true;
  }
};

const handleEndOpenChange = (open: boolean) => {
  endOpen.value = open;
};
</script>
