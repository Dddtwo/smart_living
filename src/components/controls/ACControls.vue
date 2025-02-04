<template>
  <view class="ac-controls">
    <power-toggle v-model="capabilities.power" @update:modelValue="updateCapability('power', $event)" />
    <range-slider
      v-model="capabilities.temperature"
      label="Temperature"
      :min="16"
      :max="30"
      unit="°C"
      @update:modelValue="updateCapability('temperature', $event)"
    />
    <view class="control-group">
      <text class="group-label">Mode</text>
      <picker
        :value="modeIndex"
        :range="modes"
        @change="onModeChange"
        class="picker"
      >
        <view class="picker-text">{{ capabilities.mode }}</view>
      </picker>
    </view>
    <view class="control-group">
      <text class="group-label">Fan Speed</text>
      <picker
        :value="fanSpeedIndex"
        :range="fanSpeeds"
        @change="onFanSpeedChange"
        class="picker"
      >
        <view class="picker-text">{{ capabilities.fan_speed }}</view>
      </picker>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import PowerToggle from './PowerToggle.vue'
import RangeSlider from './RangeSlider.vue'

const modes = ['cool', 'heat', 'auto', 'fan']
const fanSpeeds = ['low', 'medium', 'high', 'auto']

const props = defineProps({
  capabilities: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update'])

const modeIndex = computed(() => modes.indexOf(props.capabilities.mode))
const fanSpeedIndex = computed(() => fanSpeeds.indexOf(props.capabilities.fan_speed))

const updateCapability = (key, value) => {
  emit('update', { ...props.capabilities, [key]: value })
}

const onModeChange = (e) => {
  updateCapability('mode', modes[e.detail.value])
}

const onFanSpeedChange = (e) => {
  updateCapability('fan_speed', fanSpeeds[e.detail.value])
}
</script>

<style>
.ac-controls {
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}
.control-group {
  margin: 16rpx 0;
}
.group-label {
  font-size: 28rpx;
  color: var(--text-secondary);
  margin-bottom: 8rpx;
  display: block;
}
.picker {
  background-color: #FFFFFF;
  border: 2rpx solid var(--border-color);
  border-radius: 8rpx;
  height: 80rpx;
}
.picker-text {
  line-height: 80rpx;
  padding: 0 24rpx;
  font-size: 28rpx;
  color: var(--text-primary);
  text-transform: capitalize;
}
</style>
