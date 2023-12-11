<template>
    <div>
        <section class="page-top page-team">
            <div class="container">
                <h1>{{ title }}</h1>
                <div class="row">
                    <div class="col-lg-7">
                        <p>{{ text }}</p>
                    </div>
                    <div class="col-lg-5">
                        <h1>Person of the day</h1>
                        <div class="item-person">
                            <div class="item-person__image">
                                <img :src="picture" :alt="`${firstName} ${gender}`">
                            </div>
                            <div class="item-person__content">
                                <div class="item-person__name">{{firstName}}</div>
                                <div class="item-person__gender">{{gender}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <team></team>
            </div>
        </section>
    </div>
</template>

<script>
    import team from "@/components/team.vue";

    export default {
        name: 'teamPage',
        data() {
            return {
                firstName: "",
                gender: "",
                picture: "",
                title: "Our team",
                text: "Lorem ipsum dol ullamco laboris velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: require("../assets/team1.jpg")

            }
        },
        components: {
            team
        },
        methods: {
            async getUsers() {
                const res = await fetch('https://randomuser.me/api')
                const { results } = await res.json()

                this.firstName = results[0].name.first
                this.gender = results[0].gender
                this.picture = results[0].picture.large
            }
        },
        mounted() {
            this.getUsers()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item-person {
        display: flex;
        align-items: center;
    }
    .item-person__image {
        margin-right: 10px;
    }
    .item-person__name {
        font-size: 20px;
        font-weight: 700;
    }
</style>