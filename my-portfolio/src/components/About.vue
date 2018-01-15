<template>
  <main class="page">
    <h1 class="text-center">{{ pageName }}</h1>

    <div class="container">
        <!--<img src="/static/images/avatar.jpeg" class="img-fluid rounded-circle mx-auto d-block" height="200px" width="200px" alt="avatar">-->
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
