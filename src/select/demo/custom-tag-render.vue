<template>
  <Select
    mode="multiple"
    :tag-render="tagRender"
    :value="['gold', 'cyan']"
    style="width: 100%"
    :options="options"
  />
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Select, Tag } from 'antd-v';

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];

const tagRender = (props: any) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return h(
    Tag,
    {
      color: value,
      onMousedown: onPreventMouseDown,
      closable: closable,
      onClose: onClose,
      style: { marginInlineEnd: 4 },
    },
    () => label,
  );
};
</script>
