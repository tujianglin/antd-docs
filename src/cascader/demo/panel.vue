<template>
  <Flex vertical gap="small" align="flex-start">
    <Switch
      v-model:checked="disabled"
      checked-children="Enabled"
      un-checked-children="Disabled"
      aria-label="disabled switch"
    />
    <CascaderPanel :options="options" @change="onChange" :disabled="disabled" />
    <CascaderPanel multiple :options="options" @change="onMultipleChange" :disabled="disabled" />
    <CascaderPanel />
  </Flex>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CascaderProps } from 'antd-v';
import { Cascader, Flex, Switch, CascaderPanel } from 'antd-v';

interface Option {
  value: string | number;
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

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const onMultipleChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
  console.log(value);
};

const disabled = ref(false);
</script>
