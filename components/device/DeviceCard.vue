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
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.device-info {
  margin-bottom: 8px;
}

.device-name {
  font-size: 16px;
  font-weight: bold;
}

.device-status {
  font-size: 14px;
  margin-left: 8px;
}

.status-online {
  color: #4CAF50;
}

.status-offline {
  color: #9E9E9E;
}

.status-error {
  color: #F44336;
}

.device-room {
  font-size: 14px;
  color: #666;
  margin-left: 8px;
}

.device-capabilities {
  margin: 8px 0;
  font-size: 14px;
  color: #666;
}

.device-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.edit-btn, .delete-btn {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
}

.edit-btn {
  background-color: #2196F3;
  color: white;
}

.delete-btn {
  background-color: #F44336;
  color: white;
}
</style>
