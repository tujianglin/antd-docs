<template>
  <TimePicker.RangePicker :value="[startTime, endTime]" :format="format" />
</template>

<script setup lang="ts">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';

const format = 'HH:mm:ss';

const startTime = dayjs('12:08:23', 'HH:mm:ss');
const endTime = dayjs('12:08:23', 'HH:mm:ss');
</script>
