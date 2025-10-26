<template>
  <InternalDatePicker />
</template>

<script setup lang="ts">
import { DatePicker } from 'antd-v';

const InternalDatePicker = DatePicker._InternalPanelDoNotUseOrYouWillBeFired;
</script>
