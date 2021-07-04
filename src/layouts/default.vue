<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
    <v-overlay :value="$store.state.loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
    <div
      id="g_id_onload"
      data-client_id="60200972707-fis67eoi3rk1c0naig3to50av1smm5jm.apps.googleusercontent.com"
      data-login_uri="https://localhost:3000/oauth/google/callback"
      data-context="use"
    />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { useStore } from '@nuxtjs/composition-api'
import type { State } from '../store/'

export default defineComponent({
  setup() {
    const store = useStore<State>()
    const loading = computed(() => store.state.loading)
    return { loading }
  },
})
</script>
