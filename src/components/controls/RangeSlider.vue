<template>
  <view class="range-slider">
    <text class="slider-label">{{ label }}</text>
    <slider
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      @change="handleChange"
      activeColor="var(--primary-color)"
      backgroundColor="var(--border-color)"
    />
    <text class="slider-value">{{ modelValue }}{{ unit }}</text>
  </view>
</template>

<script setup>
const props = defineProps({
  label: String,
  modelValue: Number,
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  unit: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])

const handleChange = (e) => {
  emit('update:modelValue', Number(e.detail.value))
}
</script>

<style>
.range-slider {
  margin: 24rpx 0;
}
.slider-label, .slider-value {
  font-size: 28rpx;
  color: var(--text-secondary);
  margin: 8rpx 0;
}
.slider-label {
  display: block;
}
.slider-value {
  text-align: right;
}
</style>
