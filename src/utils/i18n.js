export const i18n = {
  currentLanguage: 'zh',
  device: {
    add: {
      zh: '添加设备',
      en: 'Add Device'
    },
    edit: {
      zh: '编辑设备',
      en: 'Edit Device'
    },
    delete: {
      zh: '删除',
      en: 'Delete'
    },
    name: {
      zh: '设备名称',
      en: 'Device Name'
    },
    type: {
      zh: '设备类型',
      en: 'Device Type'
    },
    room: {
      zh: '房间',
      en: 'Room'
    },
    status: {
      zh: {
        online: '在线',
        offline: '离线',
        error: '错误'
      },
      en: {
        online: 'Online',
        offline: 'Offline',
        error: 'Error'
      }
    }
  },
  controls: {
    power: {
      zh: {
        on: '开启',
        off: '关闭'
      },
      en: {
        on: 'ON',
        off: 'OFF'
      }
    },
    light: {
      zh: {
        brightness: '亮度',
        colorTemp: '色温'
      },
      en: {
        brightness: 'Brightness',
        colorTemp: 'Color Temperature'
      }
    },
    ac: {
      zh: {
        temperature: '温度',
        mode: '模式',
        fanSpeed: '风速',
        modes: {
          cool: '制冷',
          heat: '制热',
          auto: '自动',
          fan: '送风'
        },
        speeds: {
          low: '低速',
          medium: '中速',
          high: '高速',
          auto: '自动'
        }
      },
      en: {
        temperature: 'Temperature',
        mode: 'Mode',
        fanSpeed: 'Fan Speed',
        modes: {
          cool: 'Cool',
          heat: 'Heat',
          auto: 'Auto',
          fan: 'Fan'
        },
        speeds: {
          low: 'Low',
          medium: 'Medium',
          high: 'High',
          auto: 'Auto'
        }
      }
    },
    tv: {
      zh: {
        volume: '音量',
        channel: '频道'
      },
      en: {
        volume: 'Volume',
        channel: 'Channel'
      }
    },
    curtain: {
      zh: {
        position: '位置',
        stop: '停止'
      },
      en: {
        position: 'Position',
        stop: 'Stop'
      }
    }
  },
  deviceTypes: {
    zh: {
      light: '智能灯',
      ac: '空调',
      tv: '电视',
      curtain: '窗帘'
    },
    en: {
      light: 'Light',
      ac: 'AC',
      tv: 'TV',
      curtain: 'Curtain'
    }
  }
}

export const t = (key, language = i18n.currentLanguage) => {
  const keys = key.split('.')
  let value = i18n
  
  for (const k of keys) {
    value = value[k]
    if (!value) return key
  }
  
  return value[language] || key
}
