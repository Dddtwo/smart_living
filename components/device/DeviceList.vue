<template>
  <view class="device-list">
    <view v-if="deviceStore.loading" class="loading">
      Loading devices...
    </view>
    <view v-else-if="deviceStore.error" class="error">
      {{ deviceStore.error }}
    </view>
    <view v-else>
      <device-card
        v-for="device in deviceStore.devices"
        :key="device.id"
        :device="device"
        @edit="onEditDevice"
        @delete="onDeleteDevice"
      />
    </view>
    <view v-if="!deviceStore.loading && !deviceStore.devices.length" class="empty">
      No devices found
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDeviceStore } from '@/store/device'
import DeviceCard from './DeviceCard.vue'

const deviceStore = useDeviceStore()

const onEditDevice = (device) => {
  uni.navigateTo({
    url: `/pages/device/edit?id=${device.id}`
  })
}

const onDeleteDevice = async (deviceId) => {
  try {
    await deviceStore.deleteDevice(deviceId)
    uni.showToast({
      title: 'Device deleted',
      icon: 'success'
    })
  } catch (error) {
    uni.showToast({
      title: 'Failed to delete device',
      icon: 'error'
    })
  }
}

onMounted(() => {
  deviceStore.fetchDevices()
})
</script>

<style>
.device-list {
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}

.loading, .error, .empty {
  text-align: center;
  padding: 48rpx;
  color: var(--text-secondary);
  font-size: 28rpx;
}

.error {
  color: var(--error-color);
}

@media screen and (min-width: 768px) {
  .device-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24rpx;
  }
}
</style>
