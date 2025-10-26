<template>
  <Flex vertical gap="middle">
    <Cascader placeholder="Please select" variant="borderless" />
    <Cascader placeholder="Please select" variant="filled" />
    <Cascader placeholder="Please select" variant="outlined" />
    <Cascader placeholder="Please select" variant="underlined" />
  </Flex>
</template>

<script setup lang="ts">
import { Cascader, Flex } from 'antd-v';
</script>
