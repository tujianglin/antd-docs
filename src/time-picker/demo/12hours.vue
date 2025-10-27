<template>
  <Space wrap>
    <TimePicker use12-hours />
    <TimePicker use12-hours format="h:mm:ss A" />
    <TimePicker use12-hours format="h:mm a" />
  </Space>
</template>

<script setup lang="ts">
import { TimePicker, Space } from 'antd-v';
</script>
