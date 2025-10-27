<template>
  <TimePicker
    :default-open-value="dayjs('00:00:00', 'HH:mm:ss')"
    :class-names="{ popup: { root: 'myCustomClassName' } }"
  />
</template>

<script setup lang="ts">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
</script>
