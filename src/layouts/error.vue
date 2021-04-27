<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ error.statusCode }}
      </h1>
      <h2 class="subtitle">
        {{ error.message }}
      </h2>
      <v-btn to="/"> Home page </v-btn>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
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
      title: undefined,
    }
  },
  head() {
    switch (this.error.statusCode) {
      case 404:
        this.title = this.pageNotFound
        break
      case 500:
        this.title = this.serverError
        break
      default:
        this.title = this.otherError
        break
    }
    const title = this.title
    return {
      title,
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: var(--light);
  letter-spacing: 1px;
}
.nuxt-link-active,
.nuxt-link-active:hover {
  padding: 10px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  color: var(--light);
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
