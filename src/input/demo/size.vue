<template>
  <div>
    <Input size="large" placeholder="large size" :prefix="() => h(UserOutlined)" />
    <br />
    <br />
    <Input placeholder="default size" :prefix="() => h(UserOutlined)" />
    <br />
    <br />
    <Input size="small" placeholder="small size" :prefix="() => h(UserOutlined)" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { Input } from 'antd-v';
</script>
