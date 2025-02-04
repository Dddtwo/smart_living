import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', {
  state: () => ({
    devices: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchDevices() {
      this.loading = true
      try {
        const devices = await mockFetchDevices()
        this.devices = devices
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async addDevice(device) {
      this.loading = true
      try {
        const newDevice = await mockAddDevice(device)
        this.devices.push(newDevice)
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async updateDevice(device) {
      this.loading = true
      try {
        const updatedDevice = await mockUpdateDevice(device)
        const index = this.devices.findIndex(d => d.id === device.id)
        if (index !== -1) {
          this.devices[index] = updatedDevice
        }
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async deleteDevice(deviceId) {
      this.loading = true
      try {
        await mockDeleteDevice(deviceId)
        this.devices = this.devices.filter(d => d.id !== deviceId)
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
})
