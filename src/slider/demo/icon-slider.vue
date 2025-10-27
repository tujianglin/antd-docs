<template>
  <div class="icon-wrapper">
    <FrownOutlined :class="preColorCls" />
    <Slider v-bind="props" v-model:value="value" />
    <SmileOutlined :class="nextColorCls" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { Slider } from 'antd-v';

const props = defineProps<{
  max: number;
  min: number;
}>();

const value = ref(0);

const mid = computed(() => Number(((props.max - props.min) / 2).toFixed(5)));
const preColorCls = computed(() => value.value >= mid.value ? '' : 'icon-wrapper-active');
const nextColorCls = computed(() => value.value >= mid.value ? 'icon-wrapper-active' : '');
</script>
