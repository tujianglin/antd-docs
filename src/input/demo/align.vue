<template>
  <div>
    <Mentions :style="{ width: 100 }" :rows="1" />
    <Input.TextArea :rows="1" :style="{ width: 100 }" />
    <Button type="primary">Button</Button>
    <Input :style="{ width: 100 }" />
    <Text copyable>Ant Design</Text>
    <Input prefix="1" suffix="2" :style="{ width: 100 }" />
    <Input addon-before="1" addon-after="2" :style="{ width: 100 }" />
    <InputNumber :style="{ width: 100 }" />
    <DatePicker :style="{ width: 100 }" />
    <TimePicker :style="{ width: 100 }" />
    <Select :style="{ width: 100 }" value="jack" :options="selectOptions" />
    <Select :style="{ width: 100 }" value="" :options="selectOptions" />
    <Select :style="{ width: 100 }" :options="selectOptions" />
    <TreeSelect :style="{ width: 100 }" />
    <Cascader :value="['zhejiang', 'hangzhou', 'xihu']" :options="options" />
    <RangePicker />
    <DatePicker picker="month" />
    <RadioGroup value="a">
      <RadioButton value="a">Hangzhou</RadioButton>
      <RadioButton value="b">Shanghai</RadioButton>
    </RadioGroup>
    <AutoComplete :style="{ width: 100 }" placeholder="input here" />
    <br />
    <Input prefix="$" addon-before="Http://" addon-after=".com" value="mysite" />
    <Input :style="narrowStyle" suffix="Y" />
    <Input :style="narrowStyle" />
    <Input :style="narrowStyle" value="1" suffix="Y" />
  </div>
</template>

<script setup lang="ts">
import { AutoComplete, Button, Cascader, DatePicker, Input, InputNumber, Mentions, Radio, Select, TimePicker, TreeSelect, Typography } from 'antd-v';

const { Text } = Typography;
const RangePicker = DatePicker.RangePicker;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const narrowStyle = { width: 50 };

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          { value: 'xihu', label: 'West Lake' },
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
          { value: 'zhonghuamen', label: 'Zhong Hua Men' },
        ],
      },
    ],
  },
];

const selectOptions = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
];
</script>
