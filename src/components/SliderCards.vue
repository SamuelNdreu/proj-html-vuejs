<script>
import { store } from '../store.js'
export default {
    name: 'SliderCards',
    components: {
        
    },
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="container-fluid bg-white my-4 gy-4 cs-container ">
        <div class="row">
            <div class="col-12">
                <h3>Portfolio</h3>
                <p>latest work</p>
                <div class="carousel text-center">
                    <span class="">
                         ---- Here Carousel -----
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;

section {
    background-color: white;
    height: 300px;
    padding-bottom: 10rem;

    div.carousel {
        height: 30px;
    }

}
</style>