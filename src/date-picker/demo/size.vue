<template>
  <Space vertical :size="12">
    <Radio.Group
      v-model:value="size"
      :options="[
        { label: 'Large', value: 'large' },
        { label: 'middle', value: 'middle' },
        { label: 'Small', value: 'small' },
      ]"
    />
    <DatePicker :size="size" />
    <DatePicker :size="size" picker="month" />
    <RangePicker :size="size" />
    <DatePicker :size="size" picker="week" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Radio, Space } from 'antd-v';

const RangePicker = DatePicker.RangePicker;
const size = ref('middle');
</script>
