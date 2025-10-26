<template>
  <div>
    <Radio.Group
      v-model:value="placement"
      :options="[
        { label: 'topLeft', value: 'topLeft' },
        { label: 'topRight', value: 'topRight' },
        { label: 'bottomLeft', value: 'bottomLeft' },
        { label: 'bottomRight', value: 'bottomRight' },
      ]"
    />
    <br />
    <br />
    <DatePicker :placement="placement" />
    <br />
    <br />
    <RangePicker :placement="placement" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, Radio } from 'antd-v';

const RangePicker = DatePicker.RangePicker;
const placement = ref('topLeft');
</script>
