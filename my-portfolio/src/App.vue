<template>
  <div id="app">
    <main>
      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">Michela Federico</h1>
          <h1 class="display-6">Web Developer</h1>
        </div>
      </div>

      <ul class="dash-menu flex-container flex-container--center">
        <li class="flex-container__item flex-container__item--center" v-for="menuItem in mainMenuItems">
          <router-link v-bind:to="menuItem.path" class="dash-menu__item dash-menu__item--round" v-bind:class="menuItemClass(menuItem.name)">
            <i class="material-icons md-light md-48 valign-middle"></i>
          </router-link>
        </li>
      </ul>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

    created() {
      this.$parent.pages.forEach( page => {
        if (page.type == 'mainMenu') {
          this.mainMenuItems.push(page);
        }
      });
    },

    data() {
      return {
        mainMenuItems: [],
      }
    },

    methods: {
      menuItemClass: function(menuItemName) {
        return 'dash-menu__item--' + menuItemName.toLowerCase();
      }
    }
  }
</script>

<style>
  @import "scss/main.scss";
</style>
