<script>
export default {
    name: 'JumboElement'
}
</script>

<template>
    <div class="container-wrap flex-column">
        <div class="text-wrap">
            <h2> Business Planning</h2>
            <h3>Digital Technology</h3>
            <h2>Modern Solution!</h2>
        
            <div class="paragraph">
                <p class="m-5">
                    When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.
                </p>
            </div>
            <button class="warning m-2">Try it now</button>
            <button class="warning m-2">Explore More</button>        
        </div>    
            
    </div>


</template>
<style lang="scss" scoped>
@use '../styles/partials/variable' as*;
@use '../styles/style.scss' as*;

.container-wrap {
    margin: 0 auto;
    max-width: 1920px;
    min-height: 800px;
    background: $background-color-jumbo-nav;

    .flex{
        display: flex;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
    }


    h2 {
        font-size: 64px;
        font-weight: 700;
        line-height: 1.3em;
        letter-spacing: -2px;
        color: $text-color-primary;
        
    }

    h3 {
        font-size: 64px;
        font-weight: 400;
        line-height: 1.3em;
        letter-spacing: -2px;
        color: $text-color-primary;
    }

    p {
        color: $text-color-secondary;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5em;
        max-width: 449px;
    }
}
</style>