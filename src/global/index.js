import Vue from 'vue'
import api from './api'
import style from './style'
import page from './page'

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
  },
  {
    page: page,
  },
]
globals.forEach((item) => {
  for (var key in item) {
    Vue.prototype['$' + key] = item[key]
  }
})