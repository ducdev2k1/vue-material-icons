<script setup lang="ts">
import * as MIcons from '@ducdev2k1/vue-material-icons';
import { computed, defineProps } from 'vue';

type IconName = keyof typeof MIcons;

interface IProps {
  icon: IconName;
  size?: string | number;
  color?: string;
  viewBox?: string;
}

const props = defineProps<IProps>();
const icon = computed(() => MIcons[props.icon]);
</script>

<template>
  <component :is="icon" :size="props.size" :color="props.color" :viewBox="props.viewBox" />
</template>
