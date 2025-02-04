<template>
  <view class="power-toggle">
    <button 
      :class="['toggle-btn', { 'active': modelValue }]"
      @click="$emit('update:modelValue', !modelValue)"
    >
      {{ modelValue ? t('controls.power.on') : t('controls.power.off') }}
    </button>
  </view>
</template>

<script setup>
import { t } from '@/utils/i18n'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
defineEmits(['update:modelValue'])
</script>

<style>
.power-toggle {
  margin: 16rpx 0;
}
.toggle-btn {
  width: 160rpx;
  height: 64rpx;
  border-radius: 32rpx;
  background-color: var(--text-secondary);
  color: #FFFFFF;
}
.toggle-btn.active {
  background-color: var(--primary-color);
}
</style>
