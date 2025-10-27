<template>
  <Flex vertical gap="12">
    <InputNumber placeholder="Outlined" style="width: 200" />
    <InputNumber placeholder="Filled" variant="filled" style="width: 200" />
    <InputNumber placeholder="Borderless" variant="borderless" style="width: 200" />
    <InputNumber placeholder="Underlined" variant="underlined" style="width: 200" />
  </Flex>
</template>

<script setup lang="ts">
import { InputNumber, Flex } from 'antd-v';
</script>