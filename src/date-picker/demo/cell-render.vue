<template>
  <Space :size="12" vertical>
    <DatePicker :cell-render="cellRender" />
    <DatePicker.RangePicker :cell-render="cellRender" />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { DatePicker, Space, theme } from 'antd-v';

const { token } = theme.useToken();

const cellRender = (current: any, info: any) => {
  if (info.type !== 'date') {
    return info.originNode;
  }
  if (typeof current === 'number' || typeof current === 'string') {
    return h('div', { class: 'ant-picker-cell-inner' }, current);
  }
  const style =
    current.date() === 1
      ? {
          border: `1px solid ${token.value.colorPrimary}`,
          borderRadius: '50%',
        }
      : {};
  return h(
    'div',
    {
      class: 'ant-picker-cell-inner',
      style,
    },
    current.date(),
  );
};
</script>
