export const DEVICE_TYPES = {
  LIGHT: 'light',
  AC: 'air_conditioner',
  TV: 'television',
  CURTAIN: 'curtain'
}

export const DEVICE_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  ERROR: 'error'
}

export const DEVICE_CAPABILITIES = {
  [DEVICE_TYPES.LIGHT]: ['power', 'brightness', 'color_temperature'],
  [DEVICE_TYPES.AC]: ['power', 'temperature', 'mode', 'fan_speed'],
  [DEVICE_TYPES.TV]: ['power', 'volume', 'channel'],
  [DEVICE_TYPES.CURTAIN]: ['position', 'stop']
}
