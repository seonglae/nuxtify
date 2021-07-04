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
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: String,
      statusCode: Number,
    },
  },
  setup(props) {
    const error = props.error
    const header = computed((): string => {
      switch (error.statusCode) {
        case 404:
          return '404 Not Found'
        case 500:
          return 'Internal Server Error'
        default:
          return 'An error occurred'
      }
    })
    return { header }
  },
  head(): { title: string } {
    return {
      title: this.header,
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
