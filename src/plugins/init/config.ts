import Vue from 'vue'
import { AxiosInstance } from 'axios'

export default ({ $axios }: { $axios: AxiosInstance }) => {
  if (process.client) {
    const origin = window.location.origin
    $axios.defaults.baseURL = origin
  }

  Vue.mixin({
    data: () => ({
      title: process.env.title,
      version: process.env.version,
    }),
  })
}
