<template>
  <view class="device-management">
    <device-list />
    <view class="add-device">
      <button class="add-btn" @click="navigateToAdd">Add Device</button>
    </view>
  </view>
</template>

<script setup>
import DeviceList from '@/components/device/DeviceList.vue'

const navigateToAdd = () => {
  uni.navigateTo({
    url: '/pages/device/add'
  })
}
</script>

<style>
.device-management {
  min-height: 100vh;
  background-color: var(--primary-bg);
}

.add-device {
  position: fixed;
  bottom: 32px;
  left: 0;
  right: 0;
  padding: 0 16px;
}

.add-btn {
  width: 100%;
  height: 44px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 22px;
  font-size: 16px;
  box-shadow: var(--card-shadow);
}

.add-btn:active {
  background-color: var(--primary-dark);
}
</style>
