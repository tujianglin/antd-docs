<template>
  <div>
    <p style="margin-bottom: 20px">
      <Checkbox v-model:checked="checked" :disabled="disabled">
        {{ label }}
      </Checkbox>
    </p>
    <p>
      <Button type="primary" size="small" @click="toggleChecked">
        {{ !checked ? 'Check' : 'Uncheck' }}
      </Button>
      <Button style="margin: 0 10px" type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </Button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button, Checkbox } from 'antd-v';

const checked = ref(true);
const disabled = ref(false);

const label = computed(() => `${checked.value ? 'Checked' : 'Unchecked'}-${disabled.value ? 'Disabled' : 'Enabled'}`);

const toggleChecked = () => {
  checked.value = !checked.value;
};

const toggleDisable = () => {
  disabled.value = !disabled.value;
};
</script>
