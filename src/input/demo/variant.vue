<template>
  <Flex vertical gap="12">
    <Input placeholder="Outlined" />
    <Input placeholder="Filled" variant="filled" />
    <Input placeholder="Borderless" variant="borderless" />
    <Input placeholder="Underlined" variant="underlined" />
    <Input.Search placeholder="Filled" variant="filled" />
  </Flex>
</template>

<script setup lang="ts">
import { Input, Flex } from 'antd-v';
</script>
