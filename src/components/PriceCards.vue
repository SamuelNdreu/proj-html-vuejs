<script>
import { store } from '../store.js'
export default {
    name: 'PriceCards',
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="pricelist my-5 position-relative d-flex justify-content-center">
        <div class="cards-preview text-center">
            <h3 class="text-warning">PriceList</h3>
            <h2 class="text-light display-3">Our Pricing</h2>
            <span></span>
            <p class="text-light">When, while the lovely valley teems with vapour around meand the meridian sun strikes
                the upper surface . </p>
        </div>
    </section>
    <section class="container-fluid bg-white">
        <section class="plans-detail flex flex-centered flex-between ">
            <!-- Column With plans -->
            <article class="professional flex flex-between bg-white rounded-5">
                <div class="singolo my-5"><i class="fa-solid fa-user"></i></div>
                <div class="padding">
                    <h1 class="text-dark display-4">Designing</h1>
                    <h2 class="display-3 fw-bold">40£</h2>
                    <p class="grey">Per Month</p><br>
                    <p> Creative Design Enabled</p>
                    <p> Vibrant Color Usage</p>
                    <p> Eye Catching Design</p>
                    <p> Extreme Typography</p>
                    <p> Exceptional Design</p>
                    <div class="button-30days flex-centered">
                        <button class="btn btn-primary rounded-pill m-4">Order Now </button>
                    </div>
                </div>
            </article>
            <article class="professional flex flex-between  rounded-5 develop">
                <div class="singolo my-5"><i class="fa-solid fa-user"></i></div>
                <div class="padding">
                    <h1 class="text-dark display-4">Developing</h1>
                    <h2 class="display-3 fw-bold">60£</h2>
                    <p class="grey">Per Month</p><br>
                    <p>Creative Design Enabled</p>
                    <p>> Vibrant Color Usage</p>
                    <p>Eye Catching Design</p>
                    <p>Extreme Typography</p>
                    <p> Exceptional Design</p>
                    <div class="button-30days flex-centered">
                        <button class="btn btn-primary rounded-pill m-4">Order Now </button>
                    </div>
                </div>
            </article>
            <article class="professional flex flex-between bg-white rounded-5 develop">
                <div class="singolo my-5"><i class="fa-solid fa-user"></i></div>
                <div class="padding">
                    <h1 class="text-dark display-4">Supporting</h1>
                    <h2 class="display-3 fw-bold">80£</h2>
                    <p class="grey">Per Month</p><br>
                    <p>Creative Design Enabled</p>
                    <p> Vibrant Color Usage</p>
                    <p>Eye Catching Design</p>
                    <p>" Extreme Typography</p>
                    <p>Exceptional Design</p>
                    <div class="button-30days flex-centered">
                        <button class="btn btn-primary rounded-pill m-4">Order Now </button>
                    </div>
                </div>
            </article>
        </section>
    </section>
</template>

<style lang="scss">
section.pricelist {
    height: 600px;
}

section.plans-detail {
    padding-bottom: 40rem;
    height: 70px;

    article.develop {
        background-color: #ce3b6d;
    }

tton:hover.btn{
        background-color: rgb(131, 163, 163);
    }
}
</style>