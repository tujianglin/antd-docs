<template>
  <div>
    <Mentions v-model:value="value" allow-clear />
    <br />
    <br />
    <Mentions
      v-model:value="value"
      :allow-clear="{ clearIcon: () => h(CloseSquareFilled) }"
    />
    <br />
    <br />
    <Mentions v-model:value="value" allow-clear :rows="3" />
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { CloseSquareFilled } from '@ant-design/icons-vue';
import { Mentions } from 'antd-v';

const value = ref('hello world');
</script>