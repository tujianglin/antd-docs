<template>
  <Tabs
    :default-active-key="'1'"
    :items="[
      {
        key: '1',
        label: 'General',
        children: 'Content of Tab Pane 1',
      },
      {
        key: '2',
        label: 'Splitter Tab',
        children: SplitterContent,
      },
    ]"
  />
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Flex, Splitter, Tabs, Typography } from 'antd-v';

const Desc = (props: { text?: string | number }) => h(Flex, { justify: 'center', align: 'center', style: { height: '100%' } }, [
  h(Typography.Title, { type: 'secondary', level: 5, style: { whiteSpace: 'nowrap' } }, props.text),
]);

const SplitterContent = h(Splitter, { style: { height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' } }, [
  h(Splitter.Panel, { collapsible: true }, () => h(Desc, { text: 1 })),
  h(Splitter.Panel, { collapsible: { start: true } }, () => h(Desc, { text: 2 })),
  h(Splitter.Panel, {}, () => h(Desc, { text: 3 })),
]);
</script>
