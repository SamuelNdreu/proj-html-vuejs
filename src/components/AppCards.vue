<script>
import { store } from '../store.js'
export default {
    name: 'AppCards',
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="container-fluid bg-white">
        <div class="row">
            <div class="col-12 p-5">
                <span class="d-flex justify-content-center text-danger font font-weight-bold">Our Services</span>
                <h4 class="d-flex justify-content-center">What do we do</h4>
                <p class="d-flex justify-content-center">When, while the lovely valley teems with vapour around meand
                    the</p>
            </div>
        </div>
        <div class="row d-flex justify-content-center m-3">
            <div class="col-2 me-3">
                <figure>
                    <img src="../assets/images/Group-538.png" alt="">
                </figure>
                <div class="content-image-text mt-4 text-center">
                    <h3>Data Analysis</h3>
                    <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                    </p>
                </div>
            </div>
            <div class="col-2 me-3 mb-5">
                <figure>
                    <img src="../assets/images/Group-538.png" alt="">
                </figure>

                <div class="content-image-text mt-4 text-center">
                    <h3>Data Analysis</h3>
                    <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                    </p>
                </div>
            </div>
            <div class="col-2 me-3">
                <figure>
                    <img src="../assets/images/Group-538.png" alt="">
                </figure>
                <div class="content-image-text mt-4 text-center">
                    <h3>Data Analysis</h3>
                    <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                    </p>
                </div>
            </div>
            <div class="col-2 me-3 mb-5">
                <figure>
                    <img src="../assets/images/Group-538.png" alt="">
                </figure>
                <div class="content-image-text mt-4 text-center">
                    <h3>Data Analysis</h3>
                    <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 me-3 d-flex justify-content-center mb-5">
                <button class="btn btn-warning rounded-pill">View All Services</button>
            </div>
        </div>        
    </section>
</template>

<style lang="scss">
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;
</style>