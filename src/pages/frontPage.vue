<template>
  <div>
    <section class="billbord">
      <div class="container">
        <h1 class="title-big">{{ msg }}</h1>
        <h2 class="descr-big">{{ text }}</h2>
        <a href="#" class="btn-main">Make a project</a>
      </div>
    </section>
    <div class="container">
      <div class="title-section">Clients list</div>
      <div class="row">
        <div class="col-lg-8">
          <ul class="clients-list">
            <li>
              <div><strong>Erick</strong></div>
              <div>+300000000</div>
            </li>
            <li>
              <div><strong>Steave</strong></div>
              <div>+300000000</div>
            </li>
            <li>
              <div><strong>Veronica</strong></div>
              <div>+300000000</div>
            </li>
            <li v-for="itemUser in users">
             <div><strong> {{ itemUser.name }}</strong></div>
             <div> {{ itemUser.phone }}</div>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <div class="block-form">
            <form @submit.prevent>
              <div class="item-form">
                <input type="text" v-bind:value="name" @input="inputName" placeholder="Name">
              </div>
              <div class="item-form">
                <input type="text" v-bind:value="phone" @input="phone = $event.target.value" placeholder="Phone">
              </div>
              <button class="btn-main" @click="addUser">add new client</button>
            </form>
          </div>
        </div>
      </div>
      <!--<iframe width="560" height="315" :src="srcVideo" v-bind:title="titleVideo" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div v-if="isRed">the block is red</div>
      <ul>
        <li v-for="feature in features">{{ feature }}</li>
      </ul>
    -->
    </div>
    <section class="section-team">
      <div class="container">
        <h2 class="title-section">Our team</h2>
        <team></team>
      </div>
    </section>
    <section class="section-gallery">
      <div class="container">
        <h2 class="title-section">Gallery</h2>
        <SliderSection />
      </div>
    </section>
    <section class="section-news">
      <div class="container">
        <h2 class="title-section">News</h2>
        <news></news>
      </div>
    </section>
  </div>
</template>



<script>

  import team from "@/components/team.vue";
  import SliderSection from "@/components/SliderSection.vue";
  import news from "@/components/news.vue";



  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to us',
        text: 'we make vue projects',
        isRed: false,
        srcVideo: 'https://www.youtube.com/embed/cnVPm1dGQJc',
        titleVideo: 'YouTube video player',
        features: ["red", "big", "strong"],
        logo: require('../assets/logo.svg'),
        locationMain: "Симферополь, ул. Тургенева, 13 А",
        phoneMain: "+7 (978) 800-54-68",
        users: [],
      }
    },
    components: {
      team, SliderSection, news
    },
   methods: {
    addUser() {
      const newUser = {
        id: Date.now(),
        name: this.name,
        phone: this.phone,
      }
      this.users.push(newUser);
      this.name = "";
      this.phone = "";
    },
    inputName(event) {
     this.name = event.target.value; 
    }
   }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid {
    max-width: 1680px;
  }

  .tabs {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  .tabs a {
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 60px;
    background: #ccc;
    color: #000;
  }

  .tabs a.active {
    background-color: #000;
    color: #fff;
  }
  .billbord {
    min-height: 100vh;
    padding: 200px;
    color: #fff;
    background-image: url(../assets/Forest.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  .title-big {
    font-size: 60px;
    text-shadow: 0 2px 7px #606060;
  }
  .descr-big {
    font-size: 30px;
    text-shadow: 0 2px 7px #606060;
  }
  .billbord .btn-main {
    margin-top: 40px;
  }
  .clients-list li {
    margin-bottom: 10px;
  }
  


</style>