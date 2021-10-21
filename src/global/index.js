import Vue from 'vue'
import api from './api'
import style from './style'

import PublicEnumeration from './PublicEnumeration'
const globals = [
  {
    API: api,
  },
  {
    PublicEnumeration: PublicEnumeration,
  },
  {
    style: style,
  }
]
globals.forEach((item) => {
  for (var key in item) {
    Vue.prototype['$' + key] = item[key]
  }
})