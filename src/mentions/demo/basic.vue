<template>
  <Mentions
    style="width: 100%"
    :options="[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]"
    default-value="@afc163"
  />
</template>

<script setup lang="ts">
import { Mentions } from 'antd-v';
</script>