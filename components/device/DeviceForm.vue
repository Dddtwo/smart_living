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
  padding: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.label {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.input {
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.picker {
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.picker-text {
  line-height: 40px;
  padding: 0 8px;
  font-size: 14px;
}

.submit-btn {
  width: 100%;
  height: 44px;
  background-color: #2196F3;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 24px;
}

.submit-btn[disabled] {
  background-color: #ccc;
}
</style>
