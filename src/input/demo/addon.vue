<template>
  <Space vertical>
    <Input addon-before="http://" addon-after=".com" v-model:value="value1" />
    <Input :addon-before="selectBefore" :addon-after="selectAfter" v-model:value="value2" />
    <Input :addon-after="() => h(SettingOutlined)" v-model:value="value3" />
    <Input addon-before="http://" suffix=".com" v-model:value="value4" />
    <Input :addon-before="() => h(Cascader, { placeholder: 'cascader', style: { width: 150 } })" v-model:value="value5" />
  </Space>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { Cascader, Input, Select, Space } from 'antd-v';

const { Option } = Select;

const selectBefore = h(Select, { defaultValue: 'http://' }, [
  h(Option, { value: 'http://' }, 'http://'),
  h(Option, { value: 'https://' }, 'https://'),
]);
const selectAfter = h(Select, { defaultValue: '.com' }, [
  h(Option, { value: '.com' }, '.com'),
  h(Option, { value: '.jp' }, '.jp'),
  h(Option, { value: '.cn' }, '.cn'),
  h(Option, { value: '.org' }, '.org'),
]);

const value1 = ref('mysite');
const value2 = ref('mysite');
const value3 = ref('mysite');
const value4 = ref('mysite');
const value5 = ref('mysite');
</script>
