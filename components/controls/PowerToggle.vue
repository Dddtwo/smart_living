<template>
  <view class="power-toggle">
    <button 
      :class="['toggle-btn', { 'active': modelValue }]"
      @click="$emit('update:modelValue', !modelValue)"
    >
      {{ modelValue ? 'ON' : 'OFF' }}
    </button>
  </view>
</template>

<script setup>
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
