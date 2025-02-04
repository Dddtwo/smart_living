<template>
  <view class="light-controls">
    <power-toggle v-model="capabilities.power" @update:modelValue="updateCapability('power', $event)" />
    <range-slider
      v-model="capabilities.brightness"
      label="Brightness"
      unit="%"
      @update:modelValue="updateCapability('brightness', $event)"
    />
    <range-slider
      v-model="capabilities.color_temperature"
      label="Color Temperature"
      :min="2700"
      :max="6500"
      :step="100"
      unit="K"
      @update:modelValue="updateCapability('color_temperature', $event)"
    />
  </view>
</template>

<script setup>
import PowerToggle from './PowerToggle.vue'
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
</script>

<style>
.light-controls {
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}
</style>
