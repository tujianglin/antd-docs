<template>
  <Flex vertical gap="12">
    <Mentions placeholder="Outlined" />
    <Mentions placeholder="Filled" variant="filled" />
    <Mentions placeholder="Borderless" variant="borderless" />
    <Mentions placeholder="Underlined" variant="underlined" />
  </Flex>
</template>

<script setup lang="ts">
import { Mentions, Flex } from 'antd-v';
</script>