<template>
  <Slider
    :range="{ editable: true, minCount: 1, maxCount: 5 }"
    v-model:value="value"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Slider } from 'antd-v';

const value = ref([20, 80]);
</script>
