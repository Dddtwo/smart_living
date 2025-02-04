import { DEVICE_TYPES, DEVICE_STATUS } from './deviceTypes'

export const mockDevices = [
  {
    id: '1',
    name: 'Living Room Light',
    type: DEVICE_TYPES.LIGHT,
    status: DEVICE_STATUS.ONLINE,
    room: 'Living Room',
    capabilities: {
      power: true,
      brightness: 80,
      color_temperature: 4000
    }
  },
  {
    id: '2',
    name: 'Bedroom AC',
    type: DEVICE_TYPES.AC,
    status: DEVICE_STATUS.ONLINE,
    room: 'Bedroom',
    capabilities: {
      power: true,
      temperature: 24,
      mode: 'cool',
      fan_speed: 'medium'
    }
  },
  {
    id: '3',
    name: 'Living Room TV',
    type: DEVICE_TYPES.TV,
    status: DEVICE_STATUS.OFFLINE,
    room: 'Living Room',
    capabilities: {
      power: false,
      volume: 30,
      channel: 5
    }
  }
]

export const mockFetchDevices = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDevices), 500)
  })
}

export const mockAddDevice = (device) => {
  return new Promise((resolve) => {
    const newDevice = {
      ...device,
      id: String(mockDevices.length + 1)
    }
    setTimeout(() => resolve(newDevice), 500)
  })
}

export const mockUpdateDevice = (device) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...device }), 500)
  })
}

export const mockDeleteDevice = (deviceId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500)
  })
}
