<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>{{ pageName }}</h1>

    <div class="container">
        <img src="/static/images/avatar.jpeg" class="img-fluid rounded-circle mx-auto d-block" height="200px" width="200px" alt="avatar">
    </div>
  </main>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      pageName: 'About Me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
