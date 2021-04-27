<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ error.statusCode }}
      </h1>
      <h2 class="subtitle pb-3">
        {{ error.message }}
      </h2>
      <v-btn to="/"> Home </v-btn>
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      serverError: 'Internal Server Error',
      otherError: 'An error occurred',
    }
  },
  computed: {
    title(): string {
      switch (this.error.statusCode) {
        case 404:
          return this.pageNotFound
        case 500:
          this.serverError
        default:
          return this.otherError
      }
    },
  },
  head(): { title: string } {
    return {
      title: this.title,
    }
  },
})
</script>

<style scoped>
.container {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif;
  color: var(--light);
}
.subtitle {
  font-weight: lighter;
  font-size: 3rem;
  color: var(--light);
}
</style>
