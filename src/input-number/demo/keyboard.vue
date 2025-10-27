<template>
  <Space>
    <InputNumber :min="1" :max="10" :keyboard="keyboard" :value="3" />
    <Checkbox v-model:checked="keyboard">
      Toggle keyboard
    </Checkbox>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Checkbox, InputNumber, Space } from 'antd-v';

const keyboard = ref(true);
</script>
