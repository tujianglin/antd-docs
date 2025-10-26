<template>
  <Space vertical :size="12">
    <DatePicker v-model:value="value1" :disabled="true" />
    <DatePicker picker="month" v-model:value="value2" :disabled="true" />
    <RangePicker v-model:value="value3" :disabled="true" />
    <RangePicker v-model:value="value4" :disabled="[false, true]" />
    <DatePicker
      v-model:value="value5"
      :min-date="dayjs('2019-06-01', dateFormat)"
      :max-date="dayjs('2020-06-30', dateFormat)"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Space } from 'antd-v';
import dayjs from 'dayjs';

const RangePicker = DatePicker.RangePicker;

const dateFormat = 'YYYY-MM-DD';

const value1 = ref(dayjs('2015-06-06', dateFormat));
const value2 = ref(dayjs('2015-06', 'YYYY-MM'));
const value3 = ref([dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]);
const value4 = ref([dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]);
const value5 = ref(dayjs('2019-09-03', dateFormat));
</script>