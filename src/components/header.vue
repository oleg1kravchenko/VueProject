<template>
  <header class="header default" v-on:click="addClass" id="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <span class='sandwich'>
            <span class='sw-topper'></span>
            <span class='sw-bottom'></span>
            <span class='sw-footer'></span>
          </span>
          <a href="/" class="logo">
            <img v-bind:src="logo" alt="alt">
          </a>
          <div class="location-main">{{locationMain}}</div>
        </div>
        <ul class="menu">
          <li v-for="itemMenu in menu">
            <a :href="itemMenu.link">{{itemMenu.title}}</a>
          </li>
        </ul>
        <div class="header__right">
          <div class="line-contacts">
            <a :href="phoneMain" class="phone-main">{{ phoneMain }}</a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
          </div>
          <a href="#" class="btn-main btn-main_white">Contact us</a>
        </div>
      </div>
    </div>
    <div class="menu-mobile">
      <ul class="menu">
        <li v-for="itemMenu in menu">
          <a :href="itemMenu.link">{{itemMenu.title}}</a>
        </li>
      </ul>
      <div class="line-contacts">
        <a :href="phoneMain" class="phone-main">{{ phoneMain }}</a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </header>

</template>

<script>
  import $ from "jquery";


  export default {
    name: 'headerMain',
    data() {
      return {
        logo: require('../assets/logo.svg'),
        locationMain: "New York, Union City",
        //sandwichClick: false,
        phoneMain: "+0 (000) 000-00-00",
        menu: [
          { title: "About", link: "#/about" },
          { title: "Team", link: "#/team" },
          { title: "News", link: "#/news" },
          { title: "Contacts", link: "#/contacts" },
        ],
        active: true,
      }
    },
    methods: {
      addClass() {
        // $(".header").fadeOut(0);
      }
    },
    mounted() {
      //прилипающие меню
      var $menu = $(".header");
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
          $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
          $menu.removeClass("fixed").addClass("default");
        }

      });

      if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
        $menu.removeClass("default").addClass("fixed");
      } else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed").addClass("default");
      }
      
      $(".sandwich").click(function () {
        if ($(".menu-mobile").is(":hidden")) {
          $(".menu-mobile").slideDown(200);
          $(".header").addClass("active");
          $(".sandwich").addClass("active");
        } else {
          $(".menu-mobile").slideUp(200);
          $(".header").removeClass("active");
          $(".sandwich").removeClass("active");
        }
      });


      $(".menu-mobile .menu li a").click(function () {
        $(".menu-mobile").slideUp(200);
        $(".sandwich").removeClass("active");
        $(".header").removeClass("active");
      });
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    font-size: 14px;
    line-height: 20px;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
  }

  .header.fixed {
    background-color: #242424;
  }

  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn-main {
    font-size: 14px;
    line-height: 20px;
    padding: 0 43px;
    height: 60px;
    letter-spacing: 0.1em;
    background: #DCEF1E;
    text-transform: uppercase;
    color: #000;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn-main:hover {
    background: #aaba0f;
  }

  .logo {
    display: inline-block;
  }

  .logo img {
    width: 55px;
    max-width: 100%;
    height: auto;
  }

  .menu {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .menu li {
    padding: 0 25px;
  }

  .menu a {
    font-size: 16px;
    line-height: 22px;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    display: inline-block;
  }

  .menu a:hover,
  .menu .active a {
    border-color: #DCEF1E;
  }

  .menu__haschild {
    padding-right: 20px;
    position: relative;
  }

  .menu__haschild::after {
    font-size: 13px;
    position: absolute;
    content: "\f078";
    top: 3px;
    right: 0;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-family: "Font Awesome 5 Pro";
    font-weight: 400;
  }

  .header__right {
    display: flex;
    align-items: center;
  }

  .phone-main {
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    color: #fff;
  }

  .phone-main i {
    display: none;
  }

  .line-contacts {
    display: flex;
    align-items: center;
  }

  .line-contacts a:not(.phone-main) {
    font-size: 20px;
  }

  .line-contacts a {
    margin-right: 15px;
    color: #fff;
  }

  .line-contacts a:last-child {
    margin-right: 0;
  }

  /*Style Sandwich*/
  .sandwich span {
    display: block;
  }

  .sandwich {
    width: 39px;
    height: 39px;
    margin-right: 30px;
    padding-top: 10px;
    border-radius: 50%;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 20;
    flex: none;
    cursor: pointer;
  }

  .sw-topper {
    position: relative;
    top: 4px;
    width: 30px;
    height: 2px;
    display: block;
    margin: 0;
    background-color: #fff;
    border: medium none;
    transition: transform 0.5s, top 0.2s;
    /* transition-delay: 0.2s, 0s; */
  }

  .sw-bottom {
    position: relative;
    top: 10px;
    width: 30px;
    height: 2px;
    display: block;
    margin: 0;
    background-color: #fff;
    border: medium none;
    transition: transform 0.5s, top 0.2s;
    transition-delay: 0.2s, 0s;
  }

  .sw-footer {
    position: relative;
    top: 16px;
    width: 30px;
    height: 2px;
    display: block;
    margin: 0;
    background-color: #fff;
    border: medium none;
    transition: all 0.5s;
    transition-delay: 0.1s;
  }

  .sandwich.active .sw-topper {
    top: 9px;
    transform: rotate(45deg);
  }

  .sandwich.active .sw-bottom {
    opacity: 0;
  }

  .sandwich.active .sw-footer {
    top: 5px;
    transform: rotate(-45deg);
  }

  .btn-main_white {
    height: 50px;
    padding: 0 26px;
    text-transform: none;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 400;
    background-color: transparent;
  }

  .btn-main_white:hover {
    color: #000;
    background-color: #fff;
  }

  .header__right .btn-main {
    margin-left: 20px;
    flex: none;
  }

  .header__left {
    display: flex;
    align-items: center;
  }

  .header__left .logo {
    margin-right: 10px;
  }
  .header.header_page {
    background-color: #000;
  }


  @media only screen and (max-width : 992px) {

    .header__right .line-contacts,
    .location-main,
    .menu {
      display: none;
    }

    .header {
      padding: 10px 0;
    }

    .menu-mobile {
      width: 100%;
      top: 100%;
      left: 0;
      height: 100vh;
      padding: 15px 15px;
      padding-bottom: 120px;
      display: none;
      overflow: auto;
      background-color: #242424;
      position: absolute;
    }

    .menu a {
      margin: 0;
      padding: 15px 10px;
      display: block;
      position: relative;
      border-bottom: 1px solid #fff;
    }

    .menu-mobile .menu {
      display: block;
      margin: 0;
      padding: 0;
      margin-bottom: 20px;
    }

    .menu-mobile .menu li {
      padding: 0;
    }

    .header.active {
      background-color: #242424;
    }

    .sandwich {
      display: flex;
    }
  }

  @media only screen and (min-width : 992px) {
    .menu-mobile {
      display: none !important;
    }
  }
</style>