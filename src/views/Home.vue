<template>
  <div class="w-page">
    <div class="w-container">
      <img src="~/assets/logo.png" alt="logo">
      <HelloWorld :msg="msg"/>
    </div>
  </div>
</template>
<script>
  import HelloWorld from 'components/HelloWorld';

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        msg: 'Mode=' + TNS_APP_MODE + ' and Platform=' + TNS_APP_PLATFORM
      };
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 20%;
    width: 20%;
    display: block;
    margin: auto;
    margin-top: 4em;
  }
</style>
