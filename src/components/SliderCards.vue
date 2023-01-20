<script>
import { store } from '../store.js'
export default {
    name: 'SliderCards',
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="container-fluid bg-white my-4 gy-4">
        <div class="row">
            <div class="col-12">
                <h3>Portfolio</h3>
                <p>latest work</p>
            </div>
        </div>
    </section>
    <section id="game-id-card" class="container-fluid   bg-white jumpy g-5">
            <div class="row g-3">
                <div class="col-12 text-center">
                    <h1> Carousel Place</h1>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;
    section{
    background-color: white;
    
}
</style>