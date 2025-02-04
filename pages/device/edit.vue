<template>
  <view class="edit-device">
    <device-form 
      v-if="device"
      :device="device"
      @submit="onSubmit"
    />
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDeviceStore } from '@/store/device'
import DeviceForm from '@/components/device/DeviceForm.vue'

const deviceStore = useDeviceStore()
const device = ref(null)

onMounted(() => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const deviceId = currentPage.$page.options.id
  
  device.value = deviceStore.devices.find(d => d.id === deviceId)
  
  if (!device.value) {
    uni.showToast({
      title: 'Device not found',
      icon: 'error'
    })
    uni.navigateBack()
  }
})

const onSubmit = async (updatedDevice) => {
  try {
    await deviceStore.updateDevice(updatedDevice)
    uni.showToast({
      title: 'Device updated successfully',
      icon: 'success'
    })
    uni.navigateBack()
  } catch (error) {
    uni.showToast({
      title: 'Failed to update device',
      icon: 'error'
    })
  }
}
</script>

<style>
.edit-device {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
