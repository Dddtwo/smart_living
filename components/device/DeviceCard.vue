<template>
  <view class="device-card">
    <view class="device-info">
      <text class="device-name">{{ device.name }}</text>
      <text :class="['device-status', `status-${device.status}`]">{{ device.status }}</text>
      <text class="device-room">{{ device.room }}</text>
    </view>
    <view class="device-capabilities">
      <text v-if="device.type === DEVICE_TYPES.LIGHT">
        Brightness: {{ device.capabilities.brightness }}%
      </text>
      <text v-if="device.type === DEVICE_TYPES.AC">
        Temperature: {{ device.capabilities.temperature }}°C
      </text>
    </view>
    <view class="device-actions">
      <button class="edit-btn" @click="emit('edit', device)">Edit</button>
      <button class="delete-btn" @click="emit('delete', device.id)">Delete</button>
    </view>
  </view>
</template>

<script setup>
import { DEVICE_TYPES } from '@/utils/deviceTypes'

const props = defineProps({
  device: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete'])
</script>

<style>
.device-card {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin: 16rpx;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.device-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16rpx;
}

.device-name {
  font-size: 32rpx;
  font-weight: bold;
  color: var(--text-primary);
}

.device-status {
  font-size: 28rpx;
  padding: 4rpx 16rpx;
  border-radius: 32rpx;
  background-color: var(--primary-bg);
}

.status-online {
  color: var(--success-color);
}

.status-offline {
  color: var(--text-secondary);
}

.status-error {
  color: var(--error-color);
}

.device-room {
  font-size: 28rpx;
  color: var(--text-secondary);
}

.device-capabilities {
  font-size: 28rpx;
  color: var(--text-secondary);
  padding: 16rpx;
  background-color: var(--primary-bg);
  border-radius: 12rpx;
}

.device-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16rpx;
}

.edit-btn, .delete-btn {
  padding: 16rpx 32rpx;
  border-radius: 8rpx;
  font-size: 28rpx;
  min-width: 160rpx;
  text-align: center;
}

.edit-btn {
  background-color: var(--primary-color);
  color: white;
}

.delete-btn {
  background-color: var(--error-color);
  color: white;
}
</style>
