<script lang="tsx" setup>
import { Alert, Switch } from 'antd-v';
import { ref } from 'vue';
const visible = ref(true);

const handleClose = () => {
  visible.value = false;
};
</script>
<template>
  <Alert
    v-if="visible"
    title="Alert message title"
    description="Further details about the context of this alert."
    type="info"
    @close="handleClose"
  ></Alert>
  <p>click the close button to see the effect</p>
  <Switch v-model:checked="visible"></Switch>
</template>
