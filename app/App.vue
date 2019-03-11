<template>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0"/>
      <Button text="About" @tap="goToAboutPage" row="1"/>
    </GridLayout>
  </Page>
</template>
<script>
  import Home from '~/views/Home';
  import About from '~/views/About';

  const { VUE_APP_MODE } = process.env;

  export default {
    data() {
      return {
        navbarTitle: `App.vue`,
      };
    },
    methods: {
      goToHomePage() {
        this.$navigateTo(Home);
      },
      goToAboutPage() {
        VUE_APP_MODE == 'web' ? this.$router.push('about') : this.$navigateTo(About);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style web>
  @import '~styles/style-one';

  .w-page {
    height: 100%;
    width: 100%;
  }
</style>
<style native>
  @import '~styles/style-one';
</style>
