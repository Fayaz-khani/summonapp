<template>
  <v-app id="inspire">
    <HeaderPage v-if="this.$store.state.loggedIn" />
    <!-- <HeaderPage /> -->
    <v-main class="lightBG">
      <v-container  class="pa-0" fluid>
        <router-view class="px-5" />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>

import HeaderPage from './components/Navigation/HeaderPage.vue';
export default {
  components: {
    HeaderPage,
  },
  data() {
    return {};
  },
  setup() {},
};
</script>

<style>
@import url(../src/assets/CSS/style.css);
@import url(../src/assets/CSS/RemixIcons/remixicon.css);
@import url(../src/assets/CSS/MingCute-main/fonts/MingCute.css);
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Lato:ital,wght@1,100&family=Open+Sans:wght@300;500&family=Poppins:wght@100;200;300&display=swap");




@media (min-width: 960px){
  .container{
    max-width: 100% !important;
  }
}
</style>