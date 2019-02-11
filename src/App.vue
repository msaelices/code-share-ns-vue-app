<template>
  <div class="w-page">
    <div class="w-container">
      <img src="~/assets/logo.png" alt="logo" height="20%" width="20%">
      <HelloWorld :msg="msg"/>
    </div>
  </div>
</template>

<template-native>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0"/>
      <Button text="About" @tap="goToAboutPage" row="1"/>
    </GridLayout>
  </Page>
</template-native>

<script>
  import HelloWorld from 'components/HelloWorld';
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        msg: 'Mode=' + TNS_APP_MODE + ' and Platform=' + TNS_APP_PLATFORM,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .w-page {
    height: 100%;
    width: 100%;
  }

  .w-navbar {
    position: fixed;
    z-index: 10000;
    height: 3em;
    width: 100%;
    top: 0px;
    left: 0px;
    margin: auto;
    list-style: none;

    display: flex;
    align-items: center;
    padding: 0 10px;

    -webkit-box-shadow: -8px 8px 6px -7px #999;
    -moz-box-shadow: -8px 8px 6px -7px #999;
    box-shadow: -8px 8px 6px -7px #999;
  }

  .w-navbar .w-title {
    margin-left: auto;
    margin-right: auto;
  }

  .w-container {
    height: 100%;
    width: 100%;
    padding-top: 3em;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
  }

  .w-container .w-button {
    width: 50%;
    height: 2em;
    margin: .25em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d7d7d7;
    border-width: 0px;
    font-weight: 600;
    border-radius: 3px;
  }
</style>
