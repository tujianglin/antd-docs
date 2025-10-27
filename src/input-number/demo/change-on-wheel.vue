<template>
  <InputNumber :min="1" :max="10" :default-value="3" change-on-wheel />
</template>

<script setup lang="ts">
import { InputNumber } from 'antd-v';
</script>
