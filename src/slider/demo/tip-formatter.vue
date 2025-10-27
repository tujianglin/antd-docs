<template>
  <div>
    <Slider :tooltip="{ formatter }" />
    <Slider :tooltip="{ formatter: null }" />
  </div>
</template>

<script setup lang="ts">
import { Slider } from 'antd-v';

const formatter = (value: number) => `${value}%`;
</script>
