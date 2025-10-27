<template>
  <div>
    <Radio :default-checked="false" :disabled="disabled">
      Disabled
    </Radio>
    <Radio :default-checked="true" :disabled="disabled">
      Disabled
    </Radio>
    <br />
    <Button type="primary" @click="toggleDisabled" style="margin-top: 16px">
      Toggle disabled
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Radio } from 'antd-v';

const disabled = ref(true);

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};
</script>