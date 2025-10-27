<template>
  <div>
    <Button @click="toggleAutoResize" style="margin-bottom: 16">
      Auto Resize: {{ String(autoResize) }}
    </Button>
    <TextArea :rows="4" :auto-size="autoResize" :default-value="defaultValue" />
    <TextArea allow-clear style="width: 93px" />
    <br />
    <TextArea
      :style="{
        resize: 'both',
      }"
      show-count
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input } from 'antd-v';

const { TextArea } = Input;

const defaultValue =
  'The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows.';

const autoResize = ref(false);

const toggleAutoResize = () => {
  autoResize.value = !autoResize.value;
};
</script>
