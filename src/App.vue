<script>
  

  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';
  export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {

        }
    }
}
</script>

<template>
  <header>
      
      <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>

</template>

<style lang="scss">
  @use './styles/general.scss' as*;
  @use './styles/partials/variable' as*;
  @use 'bootstrap/scss/bootstrap.scss' as*;
  body{
    background-color: $background-color-jumbo-nav;
  }

</style>
