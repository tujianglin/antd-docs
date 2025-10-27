<template>
  <div>
    <Switch :checked="true" />
    <br />
    <Switch size="small" :checked="true" />
  </div>
</template>

<script setup lang="ts">
import { Switch } from 'antd-v';
</script>