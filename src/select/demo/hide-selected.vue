<template>
  <Select
    mode="multiple"
    placeholder="Inserted are removed"
    v-model:value="selectedItems"
    style="width: 100%"
    :options="filteredOptions.map((item) => ({
      value: item,
      label: item,
    }))"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Select } from 'antd-v';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const selectedItems = ref<string[]>([]);

const filteredOptions = computed(() => OPTIONS.filter((o) => !selectedItems.value.includes(o)));
</script>
