<template>
  <Flex vertical gap="20">
    <Flex gap="5">
      <p>ShowCollapsibleIcon: </p>
      <RadioGroup :options="options" v-model:value="showIconMode" />
    </Flex>
    <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
      <Splitter.Panel
        :collapsible="{ start: true, end: true, showCollapsibleIcon: showIconMode }"
        min="20%"
      >
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel :collapsible="{ start: true, end: true, showCollapsibleIcon: showIconMode }">
        <Desc text="Second" />
      </Splitter.Panel>
      <Splitter.Panel :collapsible="{ start: true, end: true, showCollapsibleIcon: showIconMode }">
        <Desc text="Third" />
      </Splitter.Panel>
    </Splitter>
  </Flex>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { Flex, Radio, Splitter, Typography } from 'antd-v';

const RadioGroup = Radio.Group;

const Desc = (props: { text?: string | number }) => h(Flex, { justify: 'center', align: 'center', style: { height: '100%' } }, [
  h(Typography.Title, { type: 'secondary', level: 5, style: { whiteSpace: 'nowrap' } }, props.text),
]);

const options = [
  { label: 'Auto', value: 'auto' },
  { label: 'True', value: true },
  { label: 'False', value: false },
];

const showIconMode = ref<'auto' | boolean>(true);
</script>
