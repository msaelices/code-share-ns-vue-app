<template>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout>
      <Label text="This is an about page" textWrap="true" horizontalAlignment="center" verticalAlignment="center"/>
    </GridLayout>
  </Page>
</template>
<script>

  export default {
    data() {
      return {
        navbarTitle: `About.vue`
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '~styles/style-two';
  @import '~styles/style-one';
</style>
