<template>
  <NumericInput :style="{ width: 120 }" v-model:value="value" />
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { Input, Tooltip } from 'antd-v';

const value = ref('');

const NumericInput = (props: any) => {
  const { value: modelValue, 'onUpdate:value': updateValue } = props;

  const formatNumber = (val: number) => new Intl.NumberFormat().format(val);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      updateValue(inputValue);
    }
  };

  const handleBlur = () => {
    let valueTemp = modelValue;
    if (modelValue.charAt(modelValue.length - 1) === '.' || modelValue === '-') {
      valueTemp = modelValue.slice(0, -1);
    }
    updateValue(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = modelValue ? (
    h('span', { class: 'numeric-input-title' }, modelValue !== '-' ? formatNumber(Number(modelValue)) : '-')
  ) : (
    'Input a number'
  );

  return h(Tooltip, {
    trigger: ['focus'],
    title,
    placement: 'topLeft',
    classNames: { root: 'numeric-input' },
  }, h(Input, {
    ...props,
    onChange: handleChange,
    onBlur: handleBlur,
    placeholder: 'Input a number',
    maxLength: 16,
  }));
};
</script>
