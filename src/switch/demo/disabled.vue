<template>
  <Space vertical>
    <Switch :disabled="disabled" :checked="true" />
    <Button type="primary" @click="toggle">
      Toggle disabled
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Space, Switch } from 'antd-v';

const disabled = ref(true);

const toggle = () => {
  disabled.value = !disabled.value;
};
</script>