<template>
  <TimePicker :value="dayjs('12:08:23', 'HH:mm:ss')" disabled />
</template>

<script setup lang="ts">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
</script>