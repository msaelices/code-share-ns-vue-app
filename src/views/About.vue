<template>
  <Page>
    <GridLayout>
      <Label text="This is an about page" :textWrap="true" horizontalAlignment="center" verticalAlignment="center"/>
    </GridLayout>
  </Page>
</template>
<script>
  import { Page, GridLayout, Label } from 'nativescript-vue-web';

  export default {
    components: {
      Page,
      GridLayout,
      Label
    },
    data() {
      return {
        navbarTitle: 'About.vue'
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nvw-label {
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
</style>
