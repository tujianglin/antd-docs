<template>
  <Space vertical>
    <InputNumber addon-before="+" addon-after="$" :value="100" />
    <InputNumber :addon-before="selectBefore" :addon-after="selectAfter" :value="100" />
    <InputNumber :addon-after="() => h(SettingOutlined)" :value="100" />
    <InputNumber
      :addon-before="() => h(Cascader, { placeholder: 'cascader', style: { width: 150 } })"
      :value="100"
    />
    <InputNumber
      addon-before="+"
      :addon-after="() => h(SettingOutlined)"
      :value="100"
      :disabled="true"
      controls
    />
    <InputNumber
      prefix="¥"
      addon-before="+"
      :addon-after="() => h(SettingOutlined)"
      :value="100"
      :disabled="true"
      controls
    />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { Cascader, InputNumber, Select, Space } from 'antd-v';

const { Option } = Select;

const selectBefore = h(Select, { defaultValue: 'add', style: { width: 60 } }, [
  h(Option, { value: 'add' }, '+'),
  h(Option, { value: 'minus' }, '-'),
]);
const selectAfter = h(Select, { defaultValue: 'USD', style: { width: 60 } }, [
  h(Option, { value: 'USD' }, '$'),
  h(Option, { value: 'EUR' }, '€'),
  h(Option, { value: 'GBP' }, '£'),
  h(Option, { value: 'CNY' }, '¥'),
]);
</script>