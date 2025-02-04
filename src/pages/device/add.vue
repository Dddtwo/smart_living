<template>
  <view class="add-device">
    <device-form @submit="onSubmit" />
  </view>
</template>

<script setup>
import { useDeviceStore } from '@/store/device'
import DeviceForm from '@/components/device/DeviceForm.vue'

const deviceStore = useDeviceStore()

const onSubmit = async (device) => {
  try {
    await deviceStore.addDevice(device)
    uni.showToast({
      title: 'Device added successfully',
      icon: 'success'
    })
    uni.navigateBack()
  } catch (error) {
    uni.showToast({
      title: 'Failed to add device',
      icon: 'error'
    })
  }
}
</script>

<style>
.add-device {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
