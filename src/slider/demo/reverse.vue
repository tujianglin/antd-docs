<template>
  <div>
    <Slider :value="30" :reverse="reverse" />
    <Slider range :value="[20, 50]" :reverse="reverse" />
    Reversed: <Switch size="small" v-model:checked="reverse" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Slider, Switch } from 'antd-v';

const reverse = ref(true);
</script>
