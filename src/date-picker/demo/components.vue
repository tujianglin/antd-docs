<template>
  <Space vertical>
    <DatePicker
      :show-now="false"
      :components="{
        date: MyDatePanel,
      }"
    />
  </Space>
</template>

<script setup lang="ts">
import { h, ref, computed } from 'vue';
import { Button, DatePicker, Flex, Slider, Space, Typography } from 'antd-v';
import dayjs from 'dayjs';

const MyDatePanel = (props: any) => {
  const { value, onSelect, onHover } = props;

  const startDate = computed(() => dayjs().date(1).month(0));
  const innerValue = ref(value || startDate.value);

  const dateCount = computed(() => {
    const endDate = startDate.value.add(1, 'year').add(-1, 'day');
    return endDate.diff(startDate.value, 'day');
  });

  const sliderValue = ref(
    Math.min(
      Math.max(0, innerValue.value.diff(startDate.value, 'day')),
      dateCount.value,
    ),
  );

  return h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
      },
    },
    [
      h(
        Typography.Title,
        { level: 4, style: { margin: 0 }, title: "no, it's not" },
        'The BEST Picker Panel',
      ),
      h(Slider, {
        min: 0,
        max: dateCount.value,
        modelValue: sliderValue.value,
        'onUpdate:modelValue': (val: number) => {
          sliderValue.value = val;
          const nextDate = startDate.value.add(val, 'day');
          innerValue.value = nextDate;
          onHover?.(nextDate);
        },
        tooltip: {
          formatter: (val: number) =>
            startDate.value.add(val || 0, 'day').format('YYYY-MM-DD'),
        },
      }),
      h(
        Button,
        {
          type: 'primary',
          onClick: () => {
            onSelect(innerValue.value);
          },
        },
        "That's It!",
      ),
    ],
  );
};
</script>
