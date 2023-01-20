<script>
import NavHeader from './NavHeader.vue';
import JumboElement from './JumboElement.vue';
import AppCards from './AppCards.vue';


export default {
    name: 'AppHeader',
    components:{
            NavHeader,
            JumboElement,
            AppCards,
        }
    }
</script>

<template>
    <nav class="wrapper-lg">
        <NavHeader />
        
    </nav>
    <JumboElement />
    <AppCards />
    

</template>

<style lang="scss">

</style>