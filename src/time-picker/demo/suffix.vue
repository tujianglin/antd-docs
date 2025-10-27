<template>
  <Space vertical :size="12">
    <TimePicker
      :suffix-icon="() => h(SmileOutlined)"
      :default-open-value="dayjs('00:00:00', 'HH:mm:ss')"
    />
    <TimePicker :prefix="() => h(SmileOutlined)" />
    <TimePicker.RangePicker :prefix="() => h(SmileOutlined)" />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import { Space, TimePicker } from 'antd-v';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
</script>
