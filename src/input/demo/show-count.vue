<template>
  <Flex vertical gap="32">
    <Input show-count :max-length="20" />
    <TextArea show-count :max-length="100" placeholder="can resize" />
    <TextArea
      show-count
      :max-length="100"
      placeholder="disable resize"
      :style="{ height: 120, resize: 'none' }"
    />
  </Flex>
</template>

<script setup lang="ts">
import { Flex, Input } from 'antd-v';

const { TextArea } = Input;
</script>
