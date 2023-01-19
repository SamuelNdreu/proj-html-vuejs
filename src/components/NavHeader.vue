<script>
    import 'bootstrap/js/dist/dropdown';
    import { store } from '../store';



export default {
    name: 'NavHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
        <nav class="navbar navbar-expand-md ">
    <div class="container-fluid my-2 ">
        <a class="navbar-brand" href="#"><img src="../assets/images/white-logo-2.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown me-4" v-for="navEl in store.NavBarItems">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ navEl.title.toUpperCase() }}
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" >{{ navEl.dropdownItems[0] }}</a></li>  
                <!-- !TODO -->
            </ul>
            
            </li>
            <button><a href="#">Sign In</a></button>
        </ul>
        </div>
    </div>
    </nav>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variable' as*;
    @use '../styles/general.scss' as*;

    nav.navbar{
        background-color: $background-color-jumbo-nav;
        
    }
    
    button{
        background-color: $button-nav-main-color-accent;
        @include button-style;
    }

    
</style>