<template>
  <TimePicker :value="dayjs('12:08', format)" :format="format" />
</template>

<script setup lang="ts">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';

const format = 'HH:mm';
</script>
