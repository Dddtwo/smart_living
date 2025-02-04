<template>
  <view class="device-form">
    <view class="form-group">
      <text class="label">Device Name</text>
      <input 
        v-model="formData.name"
        class="input"
        placeholder="Enter device name"
      />
    </view>
    
    <view class="form-group">
      <text class="label">Device Type</text>
      <picker
        :value="typeIndex"
        :range="deviceTypeOptions"
        @change="onTypeChange"
        class="picker"
      >
        <view class="picker-text">
          {{ deviceTypeOptions[typeIndex] || 'Select device type' }}
        </view>
      </picker>
    </view>
    
    <view class="form-group">
      <text class="label">Room</text>
      <input 
        v-model="formData.room"
        class="input"
        placeholder="Enter room name"
      />
    </view>
    
    <button 
      class="submit-btn"
      @click="onSubmit"
      :disabled="!isValid"
    >
      {{ isEdit ? 'Update Device' : 'Add Device' }}
    </button>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DEVICE_TYPES } from '@/utils/deviceTypes'

const props = defineProps({
  device: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['submit'])

const deviceTypeOptions = Object.values(DEVICE_TYPES).map(type => 
  type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ')
)

const formData = ref({
  name: props.device.name || '',
  type: props.device.type || '',
  room: props.device.room || ''
})

const typeIndex = computed(() => {
  return deviceTypeOptions.findIndex(
    type => type.toLowerCase().replace(' ', '_') === formData.value.type
  )
})

const isEdit = computed(() => Boolean(props.device.id))

const isValid = computed(() => 
  formData.value.name && 
  formData.value.type && 
  formData.value.room
)

const onTypeChange = (e) => {
  const index = e.detail.value
  formData.value.type = deviceTypeOptions[index]
    .toLowerCase()
    .replace(' ', '_')
}

const onSubmit = () => {
  if (!isValid.value) return
  
  emit('submit', {
    ...props.device,
    ...formData.value
  })
}
</script>

<style>
.device-form {
  padding: 32rpx;
  background-color: #ffffff;
  max-width: 800rpx;
  margin: 0 auto;
  border-radius: 16rpx;
  box-shadow: var(--card-shadow);
}

.form-group {
  margin-bottom: 32rpx;
}

.label {
  display: block;
  font-size: 28rpx;
  color: var(--text-primary);
  margin-bottom: 16rpx;
}

.input {
  width: 100%;
  height: 80rpx;
  padding: 0 24rpx;
  border: 2rpx solid var(--border-color);
  border-radius: 8rpx;
  font-size: 28rpx;
  color: var(--text-primary);
}

.picker {
  width: 100%;
  height: 80rpx;
  border: 2rpx solid var(--border-color);
  border-radius: 8rpx;
}

.picker-text {
  line-height: 80rpx;
  padding: 0 24rpx;
  font-size: 28rpx;
  color: var(--text-primary);
}

.submit-btn {
  width: 100%;
  height: 88rpx;
  background-color: var(--primary-color);
  color: white;
  border-radius: 44rpx;
  font-size: 32rpx;
  margin-top: 48rpx;
}

.submit-btn[disabled] {
  background-color: var(--text-secondary);
}

@media screen and (min-width: 768px) {
  .device-form {
    margin-top: 48rpx;
    padding: 48rpx;
  }
}
</style>
