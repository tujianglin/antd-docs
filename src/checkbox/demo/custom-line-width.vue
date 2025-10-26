<template>
  <div>
    <ConfigProvider
      :theme="{
        components: {
          Checkbox: {
            lineWidth: 6,
          },
        },
      }"
    >
      <Checkbox :checked="true" />
      <Checkbox />
    </ConfigProvider>
    <Checkbox :checked="true" />
    <Checkbox />
  </div>
</template>

<script setup lang="ts">
import { Checkbox, ConfigProvider } from 'antd-v';
</script>
