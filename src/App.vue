<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  export default {
    components: {
        AppHeader,
        AppMain
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

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variable' as *;

</style>
