<template>
    <div>
        <section class="page-top page-news">
            <div class="container">
                <h1>{{ title }}</h1>
                <news></news>
            </div>
        </section>
    </div>
</template>

<script>
    import news from "@/components/news.vue";
    
    export default {
        name: 'newsPage',
        data() {
            return {
                title: "Our news",
        

            }
        },
        components: {
            news
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>