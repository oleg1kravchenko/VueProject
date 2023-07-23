<template>
    <div>
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
            <div v-for="itemPhoto in photos">
                <div class="item-slide">
                    <img :src="itemPhoto.slidePhoto" alt="alt">
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'SliderSection',
        components: { VueSlickCarousel },
        data() {
            return {
                settings: {
                    arrows: false,
                    dots: false,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                "slidesToShow": 1,
                            }
                        }
                    ]
                },
                photos: [
                    { slidePhoto: require('../assets/gallery1.jpg') },
                    { slidePhoto: require('../assets/gallery2.jpg') },
                    { slidePhoto: require('../assets/gallery3.jpg') },
                    { slidePhoto: require('../assets/gallery1.jpg') },
                ],
            }
        },
    }
</script>

<style>
    .item-slide {
        height: 250px;
        display: block;
    }

    .item-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slick-arrow {
        z-index: 2;
    }

    .slick-prev {
        left: -30px;
    }

    .slick-next {
        right: -30px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #000;
    }
    @media only screen and (max-width : 992px) {
    .section-gallery .slick-arrow {
      display: none !important;
    }
  }
</style>