<template>
  <main class="page">
    <h1 class="text-center">{{ pageName }}</h1>

    <div class="container">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Who Am I?</h2>
          <p class="lead">
            I wrote my first HTML page when I was 12.
            Internet was still a new thing in Italy and not everyone had a computer with and internet connection at home quite yet!
            Fascinated about how writing some keywords could produce such an amazing result I promised myself
            that whatever happened in my life I would have never stopped developing for the web.
          </p>
          <p class="lead">
            And here I am! Almost 20 years later still developing for the cloud!
            I always wanted to use my artistic side in my work but the circumstances of the moment pushed me to became a full stack developer,
            concentrating a bit less on the UI/UX and more on the development of functional tools and legacy code maintenance.
          </p>
          <p class="lead">
            I am now catching up with the latest front-end frameworks and development techniques after a period al stall.
            Looking for a new challenge that can stimulate me and improve my coding skills.
          </p>
        </div>
        <div class="col-md-5 flex-container">
          <img src="/static/images/profile-photo.jpeg" class="img-fluid mx-auto d-block flex-item--bottom" alt="profile-photo">
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-5">
          <img src="">
        </div>
        <div class="col-md-7 text-right">
          <h2 class="featurette-heading">Skills & Experience</h2>
          <p class="leadin text-muted">W.I.P</p>
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-5">
          <h2 class="featurette-heading">Want to work together?</h2>
          <p class="lead">I am currently open to valuate new permanent work positions or small projects.</p>
        </div>
        <div class="col-md-7 flex-container">
          <router-link to="/contacts" class="btn btn-link flex-item">CONTACT ME NOW</router-link>
        </div>
      </div>
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
  .btn.btn-link {
    border-radius: 40px;
    background-color: #68c7c1;
    color: #fff;
  }
</style>
