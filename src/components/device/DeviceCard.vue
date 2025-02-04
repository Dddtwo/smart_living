<template>
  <view class="device-card">
    <view class="device-info">
      <text class="device-name">{{ device.name }}</text>
      <text :class="['device-status', `status-${device.status}`]">{{ device.status }}</text>
      <text class="device-room">{{ device.room }}</text>
    </view>
    <view class="device-controls">
      <component
        :is="controlComponent"
        v-if="device.status === DEVICE_STATUS.ONLINE"
        :capabilities="device.capabilities"
        @update="updateCapabilities"
      />
      <text v-else class="offline-text">Device is offline</text>
    </view>
    <view class="device-actions">
      <button class="edit-btn" @click="emit('edit', device)">Edit</button>
      <button class="delete-btn" @click="emit('delete', device.id)">Delete</button>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { DEVICE_TYPES, DEVICE_STATUS } from '@/utils/deviceTypes'
import { useDeviceStore } from '@/store/device'
import LightControls from '../controls/LightControls.vue'
import ACControls from '../controls/ACControls.vue'
import TVControls from '../controls/TVControls.vue'
import CurtainControls from '../controls/CurtainControls.vue'

const props = defineProps({
  device: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete'])

const deviceStore = useDeviceStore()

const controlComponent = computed(() => {
  const componentMap = {
    [DEVICE_TYPES.LIGHT]: LightControls,
    [DEVICE_TYPES.AC]: ACControls,
    [DEVICE_TYPES.TV]: TVControls,
    [DEVICE_TYPES.CURTAIN]: CurtainControls
  }
  return componentMap[props.device.type]
})

const updateCapabilities = async (capabilities) => {
  await deviceStore.updateDevice({
    ...props.device,
    capabilities
  })
}
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

.device-controls {
  background-color: var(--primary-bg);
  border-radius: 12rpx;
  overflow: hidden;
}

.offline-text {
  padding: 32rpx;
  text-align: center;
  color: var(--text-secondary);
  font-size: 28rpx;
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
