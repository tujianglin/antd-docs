<template>
  <InternalMentions style="width: 100%" value="@" :options="options" />
</template>

<script setup lang="ts">
import { Mentions } from 'antd-v';

const InternalMentions = Mentions._InternalPanelDoNotUseOrYouWillBeFired;

const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];
</script>