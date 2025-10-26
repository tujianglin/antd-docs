<template>
  <AutoComplete
    :class-names="{
      popup: {
        root: 'certain-category-search-dropdown',
      },
    }"
    :popup-match-select-width="500"
    :style="{ width: '250px' }"
    :options="options"
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { Flex, AutoComplete, Input } from 'antd-v';

interface TitleProps {
  title?: string;
}

const Title = (props: TitleProps) => {
  return h(Flex, { align: 'center', justify: 'space-between' }, {
    default: () => [
      props.title,
      h('a', {
        href: 'https://www.google.com/search?q=antd',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, 'more')
    ]
  });
};

const renderItem = (title: string, count: number) => ({
  value: title,
  label: h(Flex, { align: 'center', justify: 'space-between' }, {
    default: () => [
      title,
      h('span', [h(UserOutlined), ` ${count}`])
    ]
  })
});

const options = computed(() => [
  {
    label: h(Title, { title: 'Libraries' }),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: h(Title, { title: 'Solutions' }),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: h(Title, { title: 'Articles' }),
    options: [renderItem('AntDesign design language', 100000)],
  },
]);
</script>

<style scoped>
.certain-category-search-dropdown :deep(.ant-popover-inner-content) {
  padding: 12px;
}
</style>

