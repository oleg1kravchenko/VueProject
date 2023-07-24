<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <a href="#" class="logo">
            <img v-bind:src="logo" alt="alt">
          </a>
        </div>
        <div class="col-lg-5">
          <ul class="footer__nav">
            <li v-for="itemMenu in menu">
              <a :href="itemMenu.link">{{itemMenu.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-5">
          <div class="footer__title">Контакты</div>
          <div class="footer__contacts">
            <p>{{ locationMain }}</p>
            <p>{{ phoneMain }}</p>
          </div>
          <a href="#" class="btn-main">Make a project</a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'footerMain',
    data() {
      return {
        logo: require('../assets/logo.svg'),
        locationMain: "New York, Union City",
        sandwichClick: false,
        phoneMain: "+0 (000) 000-00-00",
        menu: [
          { title: "About", link: "#/about" },
          { title: "Team", link: "#/team" },
          { title: "News", link: "#/news" },
          { title: "Contacts", link: "#/contacts" },
        ],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    padding: 40px 0;
    background-color: #242424;
    color: #fff;
  }

  .footer__nav li {
    margin-bottom: 15px;
  }

  .footer__nav a {
    color: #fff;
  }

  .footer__title {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 800;
  }
  .logo img {
    width: 75px;
    max-width: 100%;
    height: auto;
}
@media only screen and (max-width : 992px) {
  .footer .logo {
    display: inline-block;
    margin-bottom: 15px;
  }
}
</style>