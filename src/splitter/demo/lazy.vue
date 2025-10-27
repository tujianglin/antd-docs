<template>
  <Space vertical style="width: 100%">
    <Splitter lazy style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
      <Splitter.Panel default-size="40%" min="20%" max="70%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
    <Splitter
      lazy
      orientation="vertical"
      style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
    >
      <Splitter.Panel default-size="40%" min="30%" max="70%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Flex, Space, Splitter, Typography } from 'antd-v';

const Desc = (props: { text?: string | number }) => h(Flex, { justify: 'center', align: 'center', style: { height: '100%' } }, [
  h(Typography.Title, { type: 'secondary', level: 5, style: { whiteSpace: 'nowrap' } }, props.text),
]);
</script>
