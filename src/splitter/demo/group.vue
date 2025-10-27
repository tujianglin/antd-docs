<template>
  <Splitter style="height: 300px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel collapsible>
      <Desc text="Left" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Splitter orientation="vertical">
        <Splitter.Panel>
          <Desc text="Top" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="Bottom" />
        </Splitter.Panel>
      </Splitter>
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