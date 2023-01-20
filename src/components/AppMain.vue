<script>
import { store } from '../store.js'
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="img-wrapper">
                    <img class="img rlt  d-flex position-relative" src="../assets/images/nemoodar.png" alt="">
                    <img class="img abx  d-flex position-absolute " src="../assets/images/men-data.png" alt="">
                </div>
            </div>

            <div class="col-12 col-md-6 align-self-md-center p-lg-5 px-3">
                <span class="text-light">Start Your Project</span>
                <h1 class="fw-bold pb-3 text-light cs-text f display-3">Grow Your Business With Our Strategy</h1>
                <p class="text-primary">When, while the lovely valley teems with vapour around meand the meridian sun
                    strikes the upper surface .</p>
                <button class="btn btn-primary rounded-pill p-2">Try Now</button>
                <button class="btn btn-primary rounded-pill m-4">Explore More</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;

main {
    background-color: $background-color-jumbo-nav;
    margin-top: 4rem;

    .rlt {
        width: 63%;
        top: 18%;
        right: 21%;
    }

    .abx {
        width: 20%;
        top: 168%;
        left: 14%;
    }
}
</style>