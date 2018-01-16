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
    font-family: 'Raleway';
  }

  h1 {
    margin-bottom: 20px;
    padding-bottom: 9px;

    color: #7bcec9;
  }

  a:hover, a:active, a:focus, a:visited { text-decoration: none; }

  .flex-container {
    padding: 0;
    margin: 0;
    list-style: none;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
  }
  .flex-item { margin: 10px 30px; align-self: center; }

  .dash-menu {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .rounded-circle {
    background-color: #68c7c1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
  }

  .dash-menu-item { margin: 20px; }
  .dash-menu-item > h2 { padding-top: 20px; color: #565656; }
  .dash-menu-item > h2:hover,
  .dash-menu-item > h2:active {
    padding-top: 20px;
    color: #565656;
  }

  .dash-menu-item .rounded-circle:hover,
  .dash-menu-item .rounded-circle:active {
    color: #68c7c1;
    background-color: #565656;
  }

  // small & extra small devides
  @media (max-width: 767px) {
    .rounded-circle { width: 100px; height: 100px; }
  }
  // medium devices
  @media (max-width: 991px) {
    .rounded-circle { width: 120px; height: 120px; }
  }
  // large devices
  @media (min-width: 992px) {
    .rounded-circle { width: 140px; height: 140px; }
  }

  main.page {
    border-top: 1px solid #eceeef;
    padding: 32px 0 32px;
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
