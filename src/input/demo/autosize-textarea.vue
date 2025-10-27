<template>
  <div>
    <TextArea placeholder="Autosize height based on content lines" :auto-size="true" />
    <div style="margin: 24px 0" />
    <TextArea
      placeholder="Autosize height with minimum and maximum number of lines"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    <div style="margin: 24px 0" />
    <TextArea
      v-model:value="value"
      placeholder="Controlled autosize"
      :auto-size="{ minRows: 3, maxRows: 5 }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'antd-v';

const { TextArea } = Input;
const value = ref('');
</script>
