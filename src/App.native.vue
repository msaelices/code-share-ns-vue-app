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

  export default {
    data() {
      return {
        navbarTitle: 'App.native.vue'
      };
    },
    methods: {
      goToHomePage() {
        this.$navigateTo(Home);
      },
      goToAboutPage() {
        this.$navigateTo(About);
      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  ActionBar {
    color: #42b983;
    background-color: #000
  }
</style>
