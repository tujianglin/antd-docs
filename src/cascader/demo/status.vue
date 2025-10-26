<template>
  <Space vertical>
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
</template>

<script setup lang="ts">
import { Cascader, Space } from 'antd-v';
</script>
