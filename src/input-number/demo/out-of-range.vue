<template>
  <Space>
    <InputNumber :min="1" :max="10" v-model:value="value" />
    <Button type="primary" @click="reset">
      Reset
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, InputNumber, Space } from 'antd-v';

const value = ref<string | number | null>('99');

const reset = () => {
  value.value = 99;
};
</script>
