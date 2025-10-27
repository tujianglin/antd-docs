<template>
  <Select
    :value="'lucy'"
    style="width: 200px"
    :options="[
      {
        label: h('span', {}, 'manager'),
        title: 'manager',
        options: [
          { label: h('span', {}, 'Jack'), value: 'Jack' },
          { label: h('span', {}, 'Lucy'), value: 'Lucy' },
        ],
      },
      {
        label: h('span', {}, 'engineer'),
        title: 'engineer',
        options: [
          { label: h('span', {}, 'Chloe'), value: 'Chloe' },
          { label: h('span', {}, 'Lucas'), value: 'Lucas' },
        ],
      },
    ]"
  />
</template>

<script setup lang="ts">
import { h } from 'vue';
import { Select } from 'antd-v';
</script>
