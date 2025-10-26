<template>
  <Space vertical :size="12">
    <DatePicker :suffix-icon="() => h(SmileOutlined)" />
    <DatePicker :suffix-icon="() => h(SmileOutlined)" picker="month" />
    <RangePicker :suffix-icon="() => h(SmileOutlined)" />
    <DatePicker :suffix-icon="() => h(SmileOutlined)" picker="week" />
    <DatePicker suffix-icon="ab" />
    <DatePicker suffix-icon="ab" picker="month" />
    <RangePicker suffix-icon="ab" />
    <DatePicker suffix-icon="ab" picker="week" />
    <DatePicker :prefix="() => h(SmileOutlined)" picker="week" />
    <DatePicker prefix="Event Period" picker="week" />
    <RangePicker :prefix="() => h(SmileOutlined)" picker="week" />
    <RangePicker prefix="Event Period" picker="week" />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import { DatePicker, Space } from 'antd-v';

const RangePicker = DatePicker.RangePicker;
</script>
