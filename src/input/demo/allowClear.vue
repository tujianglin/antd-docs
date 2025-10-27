<template>
  <div>
    <Input placeholder="input with clear icon" allow-clear />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allow-clear />
  </div>
</template>

<script setup lang="ts">
import { Input } from 'antd-v';

const { TextArea } = Input;
</script>
