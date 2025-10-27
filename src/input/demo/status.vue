<template>
  <Space vertical style="width: 100%">
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="error" :prefix="() => h(ClockCircleOutlined)" placeholder="Error with prefix" />
    <Input status="warning" :prefix="() => h(ClockCircleOutlined)" placeholder="Warning with prefix" />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import ClockCircleOutlined from '@ant-design/icons-vue/ClockCircleOutlined';
import { Input, Space } from 'antd-v';
</script>
