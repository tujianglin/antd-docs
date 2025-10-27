<template>
  <Flex vertical gap="small" align="start">
    <Switch v-model:checked="open" />
    <InternalSelect
      :value="'lucy'"
      style="width: 120px"
      :open="open"
      :options="[
        { label: 'Jack', value: 'jack' },
        { label: 'Lucy', value: 'lucy' },
        { label: 'Disabled', value: 'disabled' },
        { label: 'Bamboo', value: 'bamboo' },
      ]"
      :virtual="false"
    />
  </Flex>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Flex, Select, Switch } from 'antd-v';

const InternalSelect = Select._InternalPanelDoNotUseOrYouWillBeFired;

const open = ref(true);
</script>