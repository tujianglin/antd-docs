<template>
  <Space>
    <Select aria-label="Picker Type" v-model:value="type">
      <Option value="time">Time</Option>
      <Option value="date">Date</Option>
      <Option value="week">Week</Option>
      <Option value="month">Month</Option>
      <Option value="quarter">Quarter</Option>
      <Option value="year">Year</Option>
    </Select>
    <TimePicker v-if="type === 'time'" />
    <DatePicker v-else-if="type === 'date'" />
    <DatePicker v-else :picker="type" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Select, Space, TimePicker } from 'antd-v';

const { Option } = Select;
const type = ref('time');
</script>
