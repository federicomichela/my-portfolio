<template>
  <main class="page">
    <h1>{{ pageName }}</h1>

    <div class="container">
    </div>
  </main>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      pageName: 'Project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
