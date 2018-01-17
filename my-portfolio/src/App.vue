<template>
  <div id="app">
    <main>
      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">Michela Federico</h1>
          <h1 class="display-6">Web Developer</h1>
        </div>
      </div>
      <ul class="dash-menu flex-container">
        <li class="flex-item">
          <router-link to="/about" class="dash-menu-item">
            <div class="rounded-circle">
              <i class="material-icons md-light md-48 valign-middle">person_outline</i>
            </div>
            <h2>About Me</h2>
          </router-link>
        </li>
        <li class="flex-item">
          <router-link to="/works" class="dash-menu-item">
            <div  class="rounded-circle">
              <i class="material-icons md-light md-48 valign-middle">code</i>
            </div>
            <h2>My Works</h2>
          </router-link>
        </li>
        <li class="flex-item">
          <router-link to="/contacts" class="dash-menu-item">
            <div class="rounded-circle">
              <i class="material-icons md-light md-48 valign-middle">message</i>
            </div>
            <h2>Contact Me</h2>
          </router-link>
        </li>
      </ul>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import "scss/main.scss";
</style>
