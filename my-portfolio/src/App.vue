<template>
  <div id="app">
    <!--<router-link :to="{ name: 'HelloWorld' }">World</router-link>-->
    <!--<router-link to="/uk">Uk</router-link>-->
    <router-view></router-view>

    <div class="">
      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-3">Michela Federico</h1>
          <p class="lead">"Do What you feel in your heart to be right - for you'll be criticized anyway"</p>
          <p>(Eleanor Roosevelt)</p>
        </div>
      </div>
      <div class="container dash-menu">
        <div class="row">
          <div class="col-lg-4 center">
            <div class="dash-menu-item rounded-circle"></div>
          </div>
          <div class="col-lg-4">
            <div class="dash-menu-item rounded-circle"></div>
          </div>
          <div class="col-lg-4">
            <div class="dash-menu-item rounded-circle"></div>
          </div>
        </div>
      </div>

        <!--
        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item active">
              <router-link to="/" class="nav-item">
                About me
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-item">
                My Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contacts" class="nav-item">
                Contact Me
              </router-link>
            </li>
          </ul>
        </nav>
        -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  /*
	 * Base structure
	 */

  /* Move down content because we have a fixed navbar that is 50px tall */
  body {
    padding-top: 50px;
  }

  /*
	 * Typography
	 */
  h1, h2, h3 {
    font-family: Raleway;
  }

  h1 {
    margin-bottom: 20px;
    padding-bottom: 9px;

    color: #42b983;
  }

  .dash-menu {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .dash-menu-item {
    display: inline-block;
    width: 140px;
    height: 140px;
    background-color: #42b983;
  }

</style>
