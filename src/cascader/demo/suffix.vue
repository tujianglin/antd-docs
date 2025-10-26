<template>
  <Cascader
    :suffix-icon="() => h(SmileOutlined)"
    :options="options"
    placeholder="Please select"
  />
  <br />
  <br />
  <Cascader suffix-icon="ab" :options="options" placeholder="Please select" />
  <br />
  <br />
  <Cascader
    :expand-icon="() => h(SmileOutlined)"
    :options="options"
    placeholder="Please select"
  />
  <br />
  <br />
  <Cascader expand-icon="ab" :options="options" placeholder="Please select" />
  <br />
  <br />
  <Cascader
    :prefix="() => h(SmileOutlined)"
    :options="options"
    placeholder="Please select"
  />
</template>

<script setup lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
import { Cascader } from 'antd-v';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
</script>
