<template>
  <div>
    <Switch loading :checked="true" />
    <br />
    <Switch size="small" loading />
  </div>
</template>

<script setup lang="ts">
import { Switch } from 'antd-v';
</script>
