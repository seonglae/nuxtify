<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
    <v-overlay :value="$store.state.loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
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
