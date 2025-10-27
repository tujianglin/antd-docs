<template>
  <div>
    <Slider :value="30" :disabled="disabled" />
    <Slider :range="true" :value="[20, 50]" :disabled="disabled" />
    Disabled: <Switch size="small" v-model:checked="disabled" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Slider, Switch } from 'antd-v';

const disabled = ref(false);
</script>