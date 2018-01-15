<template>
  <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>{{ pageName }}</h1>

    <div class="container">
    </div>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pageName: 'Projects'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
