<template>
  <TimePicker v-model:value="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TimePicker } from 'antd-v';
import type { Dayjs } from 'dayjs';

const value = ref<Dayjs | null>(null);
</script>
