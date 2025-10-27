<template>
  <InternalTimePicker />
</template>

<script setup lang="ts">
import { TimePicker } from 'antd-v';

const InternalTimePicker = TimePicker._InternalPanelDoNotUseOrYouWillBeFired;
</script>