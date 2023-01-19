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
    <div>

    </div>
</template>

<style lang="scss">
        @use '../styles/partials/variable' as*;
        @use '../styles/style.scss' as*;
    main{
        background-color: $background-color-jumbo-nav;
    }
</style>