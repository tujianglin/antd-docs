<template>
  <ColorPicker v-model:value="color" allow-clear />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ColorPicker } from 'antd-v';

const color = ref('#1677ff');
</script>
