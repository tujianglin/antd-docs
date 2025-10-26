<template>
  <Space>
    <ColorPicker v-model:value="color" @change="onChange" />
    <ColorPicker v-model:value="color" @changeComplete="onChangeComplete" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ColorPicker, Space } from 'antd-v';

const color = ref('#1677ff');

const onChange = (c: any) => {
  color.value = c.toHexString();
};

const onChangeComplete = (c: any) => {
  color.value = c.toHexString();
};
</script>
