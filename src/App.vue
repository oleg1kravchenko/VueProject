<template>
  <div id="app">
    <headerMain/>
    <router-view />
    <footerMain/>
  </div>
</template>

<script>


import headerMain from "./components/header.vue";

import footerMain from "./components/footerMain.vue";


export default {
  components: {
     headerMain, footerMain
  },
  name: 'App',
   
}


</script>


<style>
  @font-face {
	font-family: 'Mulish';
	src: local('Mulish Regular'), local('Mulish-Regular'),
	url('./assets/fonts/Mulish-Regular.woff2') format('woff2'),
	url('./assets/fonts/Mulish-Regular.woff') format('woff'),
	url('./assets/fonts/Mulish-Regular.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
}
@font-face {
	font-family: 'Mulish';
	src: local('Mulish Medium'), local('Mulish-Medium'),
	url('./assets/fonts/Mulish-Medium.woff2') format('woff2'),
	url('./assets/fonts/Mulish-Medium.woff') format('woff'),
	url('./assets/fonts/Mulish-Medium.ttf') format('truetype');
	font-weight: 500;
	font-style: normal;
}
@font-face {
	font-family: 'Mulish';
	src: local('Mulish SemiBold'), local('Mulish-SemiBold'),
	url('./assets/fonts/Mulish-SemiBold.woff2') format('woff2'),
	url('./assets/fonts/Mulish-SemiBold.woff') format('woff'),
	url('./assets/fonts/Mulish-SemiBold.ttf') format('truetype');
	font-weight: 600;
	font-style: normal;
}
@font-face {
	font-family: 'Mulish';
	src: local('Mulish Bold'), local('Mulish-Bold'),
	url('./assets/fonts/Mulish-Bold.woff2') format('woff2'),
	url('./assets/fonts/Mulish-Bold.woff') format('woff'),
	url('./assets/fonts/Mulish-Bold.ttf') format('truetype');
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: 'Mulish';
	src: local('Mulish Extra Bold'), local('Mulish-Extra-Bold'),
	url('./assets/fonts/Mulish-ExtraBold.woff2') format('woff2'),
	url('./assets/fonts/Mulish-ExtraBold.woff') format('woff'),
	url('./assets/fonts/Mulish-ExtraBold.ttf') format('truetype');
	font-weight: 800;
	font-style: normal;
}
#app {
  font-family: 'Mulish';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none !important;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.block-form {
	padding: 40px 40px;
	background-color: #333;
}
.item-form {
	margin-bottom: 20px;
}
.item-form input {
	width: 100%;
	height: 60px;
	border-radius: 6px;
	padding: 0 20px;
	background-color: #fff;
}
.btn-main {
	font-size: 15px;
	color: #000;
	font-weight: 700;
	height: 60px;
	padding: 0 50px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: #a7e65a;
	border: none;
	transition: all 0.3s;
}
.block-form .btn-main {
	width: 100%;
}
.page-top {
	padding-top: 135px;
	padding-bottom: 50px;
}
.title-section {
	font-size: 40px;
	padding: 30px 0;
	text-align: center;
	color: #000;
	font-weight: 700;
}
.section-news {
	padding-bottom: 30px;
}
.page-top img {
	max-width: 100%;
	height: auto;
	display: block;
}
@media only screen and (max-width : 992px) {
	.page-top {
    padding-top: 110px;
	}
}

</style>
