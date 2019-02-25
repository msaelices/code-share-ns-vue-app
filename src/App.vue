<template web>
  <div class="w-page">
    <nav>
      <ul class="w-navbar">
        <li class="w-title" :text="navbarTitle">{{navbarTitle}}</li>
      </ul>
    </nav>
    <div class="w-container">
      <router-link tag="button" class="w-button" id="homeButton" to="/">Home</router-link>
      <router-link tag="button" class="w-button" id="aboutButton" to="/about">About</router-link>
      <router-view/>
    </div>
  </div>
</template>
<template native>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0"/>
      <Button text="About" @tap="goToAboutPage" row="1"/>
    </GridLayout>
  </Page>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Home from '~/views/Home.vue';
  import About from '~/views/About.vue';


  @Component({
    name: 'home',
  })
  export default class App extends Vue {
    private navbarTitle: string = `App.vue`;

    goToHomePage() {
      Vue.prototype.$navigateTo(Home);
    }

    goToAboutPage() {
      Vue.prototype.$navigateTo(About);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style web>
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
<style native>
  ActionBar {
    background-color: #42b983;
    color: white;
  }
</style>
