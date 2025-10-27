<template>
  <Splitter vertical style="height: 300px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel>
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Flex, Splitter, Typography } from 'antd-v';

const Desc = (props: { text?: string | number }) => h(Flex, { justify: 'center', align: 'center', style: { height: '100%' } }, [
  h(Typography.Title, { type: 'secondary', level: 5, style: { whiteSpace: 'nowrap' } }, props.text),
]);
</script>