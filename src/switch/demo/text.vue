<template>
  <Space vertical>
    <Switch checked-children="开启" un-checked-children="关闭" :checked="true" />
    <Switch checked-children="1" un-checked-children="0" />
    <Switch
      :checked-children="() => h(CheckOutlined)"
      :un-checked-children="() => h(CloseOutlined)"
      :checked="true"
    />
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Space, Switch } from 'antd-v';
</script>