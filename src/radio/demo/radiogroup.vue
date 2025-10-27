<template>
  <RadioGroup v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { BarChartOutlined, DotChartOutlined, LineChartOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import { Flex, Radio } from 'antd-v';

const RadioGroup = Radio.Group;

const value = ref(1);

const options = [
  {
    value: 1,
    className: 'option-1',
    label: h(Flex, { gap: 'small', justify: 'center', align: 'center', vertical: true }, [
      h(LineChartOutlined, { style: { fontSize: 18 } }),
      'LineChart',
    ]),
  },
  {
    value: 2,
    className: 'option-2',
    label: h(Flex, { gap: 'small', justify: 'center', align: 'center', vertical: true }, [
      h(DotChartOutlined, { style: { fontSize: 18 } }),
      'DotChart',
    ]),
  },
  {
    value: 3,
    className: 'option-3',
    label: h(Flex, { gap: 'small', justify: 'center', align: 'center', vertical: true }, [
      h(BarChartOutlined, { style: { fontSize: 18 } }),
      'BarChart',
    ]),
  },
  {
    value: 4,
    className: 'option-4',
    label: h(Flex, { gap: 'small', justify: 'center', align: 'center', vertical: true }, [
      h(PieChartOutlined, { style: { fontSize: 18 } }),
      'PieChart',
    ]),
  },
];
</script>
