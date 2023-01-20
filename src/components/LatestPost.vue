<script>
import { store } from '../store.js'
export default {
    name: 'LatesPost',
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
            <div class="col-12 text-center">
                <span>Blog</span>
                <h2 class="fw-bold">Latest Posts</h2>
                <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes <br>the upper surface .</p>
            </div>            
        </div>
        <div class="container-fluid d-flex">
            <div class="row">
                <div class="col-3">
                    <article class="amazon rounded-5">
                        <span class="">
                            Apri 21,2019 by Paul
                        </span>
                        <h3>Amazon gets CCI nod to acquire 49% stake in</h3>
                        <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis laudantium odit illo dolor corrupti quaerat id doloribus, sit officia mollitia eum labore fugiat eos aliquid. Odit et ut tempora consectetur!
                        Modi corporis recusandae temporibus eaque, ducimus soluta, </p>
                    </article>
                </div>
                <div class="col-2">
                    <article class="corporations rounded-5">
                        <span class="">
                            Apri 21,2019 by Paul
                        </span>
                        <h3>Amazon gets CCI nod to acquire 49% stake in</h3>
                        <p>When, while the lovely valley teems with vapor around me, and the meridian sun s ...</p>  
                    </article>
                </div>
                <div class="col-6">
                    <article class=" bagigio rounded-5">
                        <span class="">
                            Apri 21,2019 by Paul
                        </span>
                        <h3>Amazon gets CCI nod to acquire 49% stake in</h3>
                        <p>When, while the lovely valley teems with vapor around me, and the meridian sun s ...</p>  
                    </article>
                </div>
            </div>
        </div>    
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;

article.amazon{
    width: 700px;
    height: 400px;
    background-image: url(../assets/images/headway-537308-unsplash-1380x703.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 5rem;
    margin-bottom: 20rem;
    color: $text-color-primary;
    padding: 3rem;
    filter: blur(60);
}
article.corporations{
    width: 400px;
    height: 400px;
    background-color: #0c194e;
    margin-left: 25rem;
    color: $text-color-primary;
    span{
        margin-top: 3rem;
    }
}
article.bagigio{
    width: 400px;
    height: 400px;
    background-color: #0c194e;
    margin-left: 35rem;
    color: $text-color-primary;
    font-size: 0.9rem;
}


    
</style>