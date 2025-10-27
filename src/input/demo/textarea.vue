<template>
  <div>
    <TextArea :rows="4" />
    <br />
    <br />
    <TextArea :rows="4" placeholder="maxLength is 6" :max-length="6" />
  </div>
</template>

<script setup lang="ts">
import { Input } from 'antd-v';

const { TextArea } = Input;
</script>
