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
        <li class="flex-container__item flex-container__item--center">
          <router-link to="/about" class="dash-menu__item dash-menu__item--round dash-menu__item__about">
            <i class="material-icons md-light md-48 valign-middle">person_outline</i>
          </router-link>
        </li>
        <li class="flex-container__item flex-container__item--center">
          <router-link to="/works" class="dash-menu__item dash-menu__item--round dash-menu__item__works">
            <i class="material-icons md-light md-48 valign-middle">code</i>
          </router-link>
        </li>
        <li class="flex-container__item flex-container__item--center">
          <router-link to="/contacts" class="dash-menu__item dash-menu__item--round dash-menu__item__contacts">
            <i class="material-icons md-light md-48 valign-middle">message</i>
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
