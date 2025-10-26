<template>
  <DatePicker.RangePicker :placeholder="['Start Date', 'Till Now']" :allow-empty="[false, true]" />
</template>

<script setup lang="ts">
import { DatePicker } from 'antd-v';
</script>
