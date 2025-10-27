<template>
  <div>
    <RadioGroup :options="plainOptions" v-model:value="value1" />
    <br />
    <RadioGroup :options="optionsWithDisabled" v-model:value="value2" />
    <br />
    <br />
    <RadioGroup :options="options" v-model:value="value3" option-type="button" />
    <br />
    <br />
    <RadioGroup
      :options="optionsWithDisabled"
      v-model:value="value4"
      option-type="button"
      button-style="solid"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Radio } from 'antd-v';

const RadioGroup = Radio.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', title: 'Orange', className: 'label-3' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3', disabled: true },
];

const value1 = ref('Apple');
const value2 = ref('Apple');
const value3 = ref('Apple');
const value4 = ref('Apple');
</script>
