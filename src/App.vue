<template>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0"/>
      <Button text="About" @tap="goToAboutPage" row="1"/>
    </GridLayout>
    <router-view/>
  </Page>
</template>
<script>
  const appMode = process.env.VUE_APP_MODE;

  export default {
    data() {
      return {
        navbarTitle: `App.${appMode}.vue`,
      };
    },
    methods: {
      goToHomePage() {
        this.$router.push('/');
      },
      goToAboutPage() {
        this.$router.push('about');
      },
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style web>
  .nvw-action-bar {
    color: #42b983;
  }
</style>
<style native>
  ActionBar {
    background-color: #42b983;
    color: white;
  }
</style>
