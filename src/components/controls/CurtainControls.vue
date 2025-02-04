<template>
  <view class="curtain-controls">
    <range-slider
      v-model="capabilities.position"
      label="Position"
      unit="%"
      @update:modelValue="updateCapability('position', $event)"
    />
    <button class="stop-btn" @click="stopCurtain">Stop</button>
  </view>
</template>

<script setup>
import RangeSlider from './RangeSlider.vue'

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
