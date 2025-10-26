<template>
  <ColorPicker v-model:value="color" @change="setColor">
    <Button type="primary" :style="{ backgroundColor: bgColor }">
      open
    </Button>
  </ColorPicker>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button, ColorPicker } from 'antd-v';

const color = ref('#1677ff');

const bgColor = computed(() =>
  typeof color.value === 'string' ? color.value : color.value?.toHexString(),
);

const setColor = (val: any) => {
  color.value = val;
};
</script>
