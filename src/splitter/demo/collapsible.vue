<template>
  <Flex gap="middle" vertical>
    <CustomSplitter style="height: 200px" />
    <CustomSplitter style="height: 300px" orientation="vertical" />
  </Flex>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Flex, Splitter, Typography } from 'antd-v';

const Desc = (props: { text?: string | number }) => h(Flex, { justify: 'center', align: 'center', style: { height: '100%' } }, [
  h(Typography.Title, { type: 'secondary', level: 5, style: { whiteSpace: 'nowrap' } }, props.text),
]);

const CustomSplitter = (props: any) => h(Splitter, { style: { boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', ...props.style }, ...props }, [
  h(Splitter.Panel, { collapsible: true, min: '20%' }, () => h(Desc, { text: 'First' })),
  h(Splitter.Panel, { collapsible: true }, () => h(Desc, { text: 'Second' })),
]);
</script>
