<template>
  <div>
    <div class="row row_blog" v-if="isPostLoading">
      <div class="col-lg-4 col-md-6" v-for="itemBlog in posts">
        <div class="item-blog">
          <div class="item-blog__title">{{ itemBlog.title }}</div>
          <p>{{ itemBlog.body }}</p>
        </div>
      </div>
    </div>
    <div v-else>Идет загрузка...</div>
    <div class="row row_form">
      <div class="col-lg-6 offset-lg-3">
        <div class="block-form">
          <form @submit.prevent>
            <div class="item-form">
              <input type="text" v-bind:value="title" @input="inputTitle" placeholder="title">
            </div>
            <div class="item-form">
              <input type="text" v-bind:value="body" @input="body = $event.target.value" placeholder="text">
            </div>
            <button class="btn-main" @click="addNews">Add news</button>
          </form>
        </div>
      </div>
    </div>
    <!--<button @click="fetchPosts">Получить новости</button>-->
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: 'news',
    data() {
      return {
        posts: [],
        isPostLoading: false,
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);

      },
      numbers() {


      },
      async fetchPosts() {
        var nws;
        if (this.$route.name == "frontPage") {
          nws = 3
        } else {
          nws = 9
        }
        try {

          setTimeout(async () => {


            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=' + nws);
            this.posts = response.data;
            this.isPostLoading = true;
          }, 1000)


        } catch (e) {
          alert("error");
        }
      },
      addNews() {
        const newNews = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.posts.push(newNews);
        this.title = "";
        this.body = "";
      },
      inputTitle(event) {
        this.title = event.target.value;
      }
    },
    mounted() {
      this.fetchPosts();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-blog__title {
    padding-bottom: 15px;
    margin-bottom: auto;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .item-blog {
    padding: 20px;
    box-shadow: 0 5px 15px #dadada;
    border-radius: 9px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .row_blog>div {
    margin-bottom: 20px;
  }
</style>