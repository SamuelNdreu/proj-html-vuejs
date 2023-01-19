<script>
import NavHeader from './NavHeader.vue';
import JumboElement from './JumboElement.vue';


export default {
    name: 'AppHeader',
    components:{
            NavHeader,
            JumboElement,
        }
    }
</script>

<template>
    <nav class="wrapper-lg">
        <NavHeader />
        
    </nav>
    <JumboElement />
    

</template>

<style lang="scss">

</style>