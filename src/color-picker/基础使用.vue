<script lang="tsx" setup>
import { ColorPicker } from 'antd-v';
import { effect, ref } from 'vue';

const value = ref('#1577ff');

effect(() => {
  console.log(value.value);
});
</script>
<template>
  <ColorPicker v-model:value="value" format="hex" />
</template>
