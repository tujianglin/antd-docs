<template>
  <Slider :range="{ draggableTrack: true }" :value="[20, 50]" />
</template>

<script setup lang="ts">
import { Slider } from 'antd-v';
</script>
