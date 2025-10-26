<template>
  <Space vertical :size="12">
    <DatePicker v-model:value="value1" :format="dateFormat" />
    <DatePicker v-model:value="value2" :format="dateFormatList" />
    <DatePicker v-model:value="value3" :format="monthFormat" picker="month" />
    <DatePicker v-model:value="value4" :format="customWeekStartEndFormat" picker="week" />
    <RangePicker v-model:value="value5" :format="dateFormat" />
    <DatePicker v-model:value="value6" :format="customFormat" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Space } from 'antd-v';
import dayjs from 'dayjs';

const RangePicker = DatePicker.RangePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat = (value: any) => `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat = (value: any) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value).endOf('week').format(weekFormat)}`;

const value1 = ref(dayjs('2015/01/01', dateFormat));
const value2 = ref(dayjs('01/01/2015', dateFormatList[0]));
const value3 = ref(dayjs('2015/01', monthFormat));
const value4 = ref(dayjs());
const value5 = ref([dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]);
const value6 = ref(dayjs('2015/01/01', dateFormat));
</script>