<template>
  <div id="app">
    <!--<router-link :to="{ name: 'HelloWorld' }">World</router-link>-->
    <!--<router-link to="/uk">Uk</router-link>-->
    <router-view></router-view>

    <div class="">
      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-3">Michela Federico</h1>
          <p class="lead">Full Stack Developer</p>
          <p>Python, Javascript, JQuery, HTML5, CSS3, Vue.js, Bootstrap, Jinja2, Require.js, Webpack</p>
        </div>
      </div>
      <div class="container dash-menu">
        <div class="row">
          <div class="col-lg-4 center">
            <router-link to="/about" class="dash-menu-item rounded-circle">
              <i class="material-icons md-light md-48 valign-middle">person_outline</i>
            </router-link>
          </div>
          <div class="col-lg-4">
            <router-link to="/works" class="dash-menu-item rounded-circle">
              <i class="material-icons md-light md-48 valign-middle">code</i>
            </router-link>
          </div>
          <div class="col-lg-4">
            <router-link to="/contacts" class="dash-menu-item rounded-circle">
              <i class="material-icons md-light md-48 valign-middle">message</i>
            </router-link>
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

    color: #7bcec9;
  }

  .dash-menu {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .dash-menu-item {
    width: 140px;
    height: 140px;
    display: inline-block;
    background-color: #68c7c1;
    margin-bottom: 10px;
  }
  .dash-menu-item > .valign-middle { line-height: 140px !important; }

  .dash-menu-item:hover {
    color: #68c7c1;
    background-color: #565656;
  }
  .dash-menu-item:active {

  }

  /* Rules for sizing the icon. */
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }

  /* Rules for using icons as black on a light background. */
  .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
  .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

  /* Rules for using icons as white on a dark background. */
  .material-icons.md-light { color: rgba(255, 255, 255, 1); }
  .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

</style>
