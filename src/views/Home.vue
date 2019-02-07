<template>
  <Page>
    <!-- <ActionBar :title="navbarTitle"/> -->
    <GridLayout rows="auto, auto">
      <!-- copy-webpack-plugin copies asset from src/assets to project output/build directory /assets -->
      <Img src="~/assets/logo.png" row="0" class="m-20"/>
      <HelloWorld :msg="msg" row="1"/>
    </GridLayout>
  </Page>
</template>
<script>
  import { Page, GridLayout, Img } from 'nativescript-vue-web';
  import HelloWorld from 'components/HelloWorld';

  export default {
    name: 'home',
    components: {
      HelloWorld,
      Page,
      // ActionBar,
      GridLayout,
      Img,    
    },
    data() {
      return {
        //navbarTitle: 'Home.vue',
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
  
  img {
    display: block;
    margin: auto;
    margin-top: 4em;
  }
</style>
