<template>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <!-- copy-webpack-plugin copies asset from src/assets to project output/build directory /assets -->
      <Image src="~/assets/logo.png" row="0" class="m-20"/>
      <HelloWorld :msg="msg" row="1"/>
    </GridLayout>
  </Page>
</template>
<script>
  import HelloWorld from '~/components/HelloWorld.android';

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        navbarTitle: 'Home.android.vue',
        msg: 'Mode=' + TNS_APP_MODE + ' and Platform=' + TNS_APP_PLATFORM
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ActionBar {
    color: #42b983;
  }
  
  Image {
    height: 50%;
    width: 50%;
  }
</style>
