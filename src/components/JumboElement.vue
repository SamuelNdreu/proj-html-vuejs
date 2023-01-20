<script>
export default {
    name: 'JumboElement'
}
</script>

<template>
    <section class="container j-background container-md mb-3">
        <div class="row mb-3 p-md-4 p-lg-5">
            <div class="col-12 col-md-6 align-self-md-center p-lg-5">
                <h1 class="fw-bold pb-3 text-light cs-texts ">Business Planning</h1>
                <h2 class="fw-bold pb-3 text-light cs-texts">Digital Technology</h2>
                <h3 class="text-light cs-text">Modern Solution</h3>
                <p class="text-primary">When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .</p>
                <button class="btn btn-primary rounded-pill">Try Now</button>
                <button class="btn btn-primary rounded-pill m-4">Explore More</button>
            </div>
            <div class="col-12 col-md-6" id="jumbo">
                <img class="img-fluid w-100" src="../assets/images/header.png" alt="">
            </div> 
        </div>
    </section>



</template>

<style lang="scss" scoped>
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;


section{
    background-color: $background-color-jumbo-nav;
    
}
    .flex{
        display: flex;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
    }




    .cs-texts  {
        font-size: 3.5rem;
        font-weight: 700;
        
        letter-spacing: -2px;
        color: white;
        
    }



    p {
        color: $text-color-secondary;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5em;
        max-width: 449px;
    }
</style>