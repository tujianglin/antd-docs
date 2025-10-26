<template>
  <DatePicker
    v-model:value="value"
    :min-date="dayjs('2019-08-01', dateFormat)"
    :max-date="dayjs('2020-10-31', dateFormat)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from 'antd-v';
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
const value = ref(dayjs('2019-09-03', dateFormat));
</script>
