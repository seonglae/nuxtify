<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-24" shaped>
          <v-card-title>Nuxtify</v-card-title>
          <v-card-subtitle>Nuxt, Vuetify, Typescript Minimal Template</v-card-subtitle>
          <v-toolbar dark flat>
            <v-btn href="https://github.com/seonglae">GITHUB</v-btn>
            <v-spacer />
            <v-btn href="https://twitter.com/SeonglaeC">TWITTER</v-btn>
            <v-spacer />
            <v-btn @click="() => $toast.show('Successful Toast')">TOAST</v-btn>
            <v-spacer />
            <v-btn @click="load">LOAD</v-btn>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useStore } from '@nuxtjs/composition-api'

import type { State } from '../store/'

export default defineComponent({
  setup() {
    const store = useStore<State>()
    const load = () => {
      store.commit('setLoading', true)
      setTimeout(() => store.commit('setLoading', false), 500)
    }
    return { load }
  },
})
</script>

<style src="~/assets/default.css">