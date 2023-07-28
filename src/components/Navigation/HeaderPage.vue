<template>
  <div>
    <!-- <v-app-bar
    app
    height="60"
    elevation="0"
    color="#3F4775"
    class="borderBtm"
    dark
  >
  <v-btn color="#3F4775" text icon link to="/summons" class="pa-0 ma-0 myCardIcon" >
    <span class="mgc_arrow_left_line"> </span>
  </v-btn>
    <h2 
    class="ma-auto HeaderItem" width="90%">{{CurrentRoute}}</h2>
  
  </v-app-bar> -->
  </div>
 
</template>

  <script>
export default {
  data() {
    return{
      CurrentRoute: "Summon",

    }
  },
  methods: {
    NavigateToSummons() {
      console.log("Method Called");
      this.$router.push("/summons");
    },
  },
  created() {
    this.headerTitle = localStorage.getItem("headerTitle");
    this.CurrentRoute = this.$route.params.id
    
    console.log("response is here: ", this.$route.params.id);
  },
};
</script>