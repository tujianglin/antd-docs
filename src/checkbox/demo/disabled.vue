<template>
  <div>
    <Checkbox :default-checked="false" :disabled="true" />
    <br />
    <Checkbox :indeterminate="true" :disabled="true" />
    <br />
    <Checkbox :default-checked="true" :disabled="true" />
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from 'antd-v';
</script>
