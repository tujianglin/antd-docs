<template>
  <div>
    <InputNumber prefix="￥" style="width: 100%" />
    <br />
    <br />
    <InputNumber :addon-before="() => h(UserOutlined)" prefix="￥" style="width: 100%" />
    <br />
    <br />
    <InputNumber prefix="￥" disabled style="width: 100%" />
    <br />
    <br />
    <InputNumber suffix="RMB" style="width: 100%" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { InputNumber } from 'antd-v';
</script>