<template>
  <TimePicker
    v-model:open="open"
    :render-extra-footer="() => h(Button, { size: 'small', type: 'primary', onClick: () => open = false }, 'OK')"
  />
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { Button, TimePicker } from 'antd-v';

const open = ref(false);
</script>