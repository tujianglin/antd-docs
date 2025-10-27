<template>
  <Flex gap="middle" vertical>
    <Rate :value="2" :character="({ index = 0 }) => index + 1" />
    <Rate :value="3" :character="({ index = 0 }) => customIcons[index + 1]" />
  </Flex>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { Flex, Rate } from 'antd-v';

const customIcons: Record<number, any> = {
  1: () => h(FrownOutlined),
  2: () => h(FrownOutlined),
  3: () => h(MehOutlined),
  4: () => h(SmileOutlined),
  5: () => h(SmileOutlined),
};
</script>
