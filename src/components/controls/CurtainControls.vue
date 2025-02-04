<template>
  <view class="curtain-controls">
    <range-slider
      v-model="capabilities.position"
      :label="t('controls.curtain.position')"
      unit="%"
      @update:modelValue="updateCapability('position', $event)"
    />
    <button class="stop-btn" @click="stopCurtain">{{ t('controls.curtain.stop') }}</button>
  </view>
</template>

<script setup>
import RangeSlider from './RangeSlider.vue'
import { t } from '@/utils/i18n'

const props = defineProps({
  capabilities: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update'])

const updateCapability = (key, value) => {
  emit('update', { ...props.capabilities, [key]: value })
}

const stopCurtain = () => {
  emit('update', { ...props.capabilities, stop: true })
}
</script>

<style>
.curtain-controls {
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}
.stop-btn {
  height: 88rpx;
  background-color: var(--error-color);
  color: white;
  border-radius: 44rpx;
  font-size: 32rpx;
  margin-top: 16rpx;
}
</style>
