<template>
  <main class="page">
    <div class="container lead">
      <h1 class="text-center display-4">{{ pageName }}</h1>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Who Am I?</h2>
          <p>
            I wrote my first HTML page when I was 12.
            Internet was still a new thing in Italy and not everyone had a computer with and internet connection at home quite yet!
            Fascinated about how writing some keywords could produce such an amazing result I promised myself
            that whatever happened in my life I would have never stopped developing for the web.
          </p>
          <p>
            And here I am! Almost 20 years later still developing for the cloud!
            I always wanted to use my artistic side in my work but the circumstances of the moment pushed me to became a full stack developer,
            concentrating a bit less on the UI/UX and more on the development of functional tools and legacy code maintenance.
          </p>
          <p>
            I am now catching up with the latest front-end frameworks and development techniques after a period al stall.
            Looking for a new challenge that can stimulate me and improve my coding skills.
          </p>
        </div>
        <div class="col-md-5 flex-container flex-container--bottom">
          <img src="/static/images/profile-photo2.jpg"
               class="img-fluid flex-container__item flex-container__item--bottom-right"
               alt="profile-photo" width="350px">
        </div>
      </div>
      <div class="row featurette">
        <div class="col">
          <h2 class="featurette-heading">Skills & Experience</h2>
          <p>
            In 2014 I was hired by Ancoris where I received training learning how to develop web applications on
            <i>Google Cloud Platform</i> by using a stack of technologies that consisted in:
          </p>
          <ul>
            <li>Python on the back-end</li>
            <li>Jinja2 + Handlebar.js for templating</li>
            <li>Require.js as a module bundler</li>
            <li>Javascript / JQuery / Underscore.js on the front-end</li>
            <li>Bootstrap for responsive layout</li>
          </ul>
          <p>
            During that period I have developed my first web application: a (Cfm) Meetingrooms Booking System used internally by the company,
            and I've also obtained a <i>Google App Engine Qualified Developer</i> certification.

          </p>
          <p>
            One year later I was moved to a different smaller company called Appogee HR, and I've been working there ever since.<br>
            At Appogee HR I have mostly took care of <i>bug fixing</i> and <i>maintenance</i> but I have also developed a few <i>features</i>
            for the product such us:
          </p>
          <ul>
            <li>a Reporting Tool (co-written)</li>
            <li>the front end for a Checklist tool</li>
            <li>a Data Export Tool</li>
            <li>a Customers Migration Script</li>
            <li>an Adjust Allowances Range Tool</li>
          </ul>
          <p>
            More recently I was tasked with the challenge of improving the product usability on tablets and mobile devices.<br>
            To accomplish this goal I reviewed the application UI improving the <i>responsiveness</i> and introducing
            <i>Service Workers</i> in order to transform the web application into a <i>Progressive Web Application (PWA)</i>.<br>
            By introducing this changes, a users can now experience a real mobile 'look &amp; feel' by adding the application
            to the device home screen or, if using the device native browser, by installing the application like a real native mobile app.
            Due to the limited resources I went as far as using Service Workers to provide an offline landing page
            but what PWA can offer is so much more than that!
          </p>
          <p>
            During this period I became eager to learn more about new front-end development technologies and therefore
            I started a couple of side projects to learn some of the more modern javascript frameworks like <i>Vue.js</i>
            <small>(which is powering this Portfolio! :D )</small>.<br>
            I'm also dedicating some time in learning the basics of <i>ES6</i> and improving my knowledge of
            CSS by learning how to develop <i>CSS Flexbox</i> <small>(also this Portfolio!)</small> and <i>CSS Grids</i> layouts
            and how to use the <i>BEM</i> notation. <br>
          </p>
          <p>
            Coming Next "React for Beginners"!
          </p>
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-7 flex-container flex-container--center">
          <router-link to="/contacts"
                       class="btn flex-container__item flex-container__item--center">
            GET IN TOUCH
          </router-link>
        </div>
        <div class="col-md-5">
          <h2 class="featurette-heading">Want to work together?</h2>
          <p>If you are looking for someone crazy about front-end development and passionate about modern frameworks
            and technologies with an artistic eye for good UI & UX... stop searching. You've found one!
          </p>
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

</style>
