<template>
  <view class="tv-controls">
    <power-toggle v-model="capabilities.power" @update:modelValue="updateCapability('power', $event)" />
    <range-slider
      v-model="capabilities.volume"
      :label="t('controls.tv.volume')"
      :min="0"
      :max="100"
      @update:modelValue="updateCapability('volume', $event)"
    />
    <view class="channel-control">
      <text class="channel-label">{{ t('controls.tv.channel') }}</text>
      <view class="channel-buttons">
        <button class="channel-btn" @click="changeChannel(-1)">-</button>
        <text class="channel-number">{{ capabilities.channel }}</text>
        <button class="channel-btn" @click="changeChannel(1)">+</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import PowerToggle from './PowerToggle.vue'
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

const changeChannel = (delta) => {
  const newChannel = Math.max(1, props.capabilities.channel + delta)
  updateCapability('channel', newChannel)
}
</script>

<style>
.tv-controls {
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}
.channel-control {
  margin: 16rpx 0;
}
.channel-label {
  font-size: 28rpx;
  color: var(--text-secondary);
  margin-bottom: 8rpx;
  display: block;
}
.channel-buttons {
  display: flex;
  align-items: center;
  gap: 16rpx;
  justify-content: center;
}
.channel-btn {
  width: 80rpx;
  height: 80rpx;
  border-radius: 40rpx;
  background-color: var(--primary-color);
  color: white;
  font-size: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.channel-number {
  font-size: 32rpx;
  color: var(--text-primary);
  min-width: 80rpx;
  text-align: center;
}
</style>
