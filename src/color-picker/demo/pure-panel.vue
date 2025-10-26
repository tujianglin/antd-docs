<template>
  <div style="padding-inline-start: 100px">
    <PureRenderColorPicker v-model:value="color" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ColorPicker } from 'antd-v';

const PureRenderColorPicker = ColorPicker._InternalPanelDoNotUseOrYouWillBeFired;

const color = ref('#1677ff');
</script>
