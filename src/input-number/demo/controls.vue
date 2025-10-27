<template>
  <InputNumber
    :controls="{ upIcon: () => h(ArrowUpOutlined), downIcon: () => h(ArrowDownOutlined) }"
  />
</template>

<script setup lang="ts">
import { h } from 'vue';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons-vue';
import { InputNumber } from 'antd-v';
</script>
