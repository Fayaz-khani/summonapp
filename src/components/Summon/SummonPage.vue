<template>
  <div class="SummonsPage">
    <v-app-bar
    app
    height="60"
    elevation="0"
    color="#3F4775"
    class="borderBtm"
    dark
  >
  <v-btn color="#3F4775" text icon link to="/" class="pa-0 ma-0 myCardIcon" >
    <span class="mgc_arrow_left_line"> </span>
  </v-btn>
    <h2 
    class="ma-auto HeaderItem" width="90%">Summon</h2>
  
  </v-app-bar>
    <div>
      <!-- class="d-flex flex-column justify-center" -->
      <v-container align="center">
        <v-row class="my-4">
          <v-col cols="12">
            <v-img
              class="mx-auto mt-0 pt-0"
              width="34%"
              src="../../assets/images/logo/logo.jpeg"
            >
            </v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card
              elevation="1"
              height="100"
              class="d-flex justify-center align-center"
              dark
              color="#3F4775"
              @click="NavigateToPending()"
            >
              <div class="d-flex flex-column align-center">
                <p class="pa-0 ma-0 myCardIcon">
                  <span class="mgc_to_do_line"> </span>
                </p>

                <h3 class="MenuItems">Pending</h3>
              </div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              elevation="1"
              height="100"
              class="d-flex justify-center align-center"
              dark
              color="#3F4775"
              @click="NavigateToSearch()"
            >
              <div class="d-flex flex-column align-center">
                <p class="pa-0 ma-0 myCardIcon">
                  <span class="mgc_search_3_line"> </span>
                </p>
                <h3 class="MenuItems">Search</h3>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card
              elevation="1"
              height="100"
              class="d-flex justify-center align-center"
              dark
              color="#3F4775"
              @click="NavigateToVSummon()"
            >

            <div class="d-flex flex-column align-center">
              <p class="pa-0 ma-0 myCardIcon">
                <span class="mgc_task_2_line"> </span>
              </p>
              <h3 class="MenuItems">Show Summon</h3>
            </div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              elevation="1"
              height="100"
              class="d-flex justify-center align-center"
              dark
              color="#3F4775"
              @click="NavigateToProfile()"
              
            >



            <div class="d-flex flex-column align-center">
              <p class="pa-0 ma-0 myCardIcon">
                <span class="mgc_profile_line"> </span>
              </p>
              <h3 class="MenuItems">My Profile</h3>
            </div>

            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="6">
            <v-card
              elevation="1"
              height="100"
              class="d-flex justify-center align-center"
              dark
              color="#3F4775"
              @click="NavigateToSetting()"
            >

            
            <div class="d-flex flex-column align-center">
              <p class="pa-0 ma-0 myCardIcon">
                <span class="mgc_settings_3_line"> </span>
              </p>
              <h3>Settings</h3>
            </div>

            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              elevation="1"
              height="100"
              class="d-flex justify-center align-center"
              dark
              color="#3F4775"
              @click="NavigateToExit()"
            >
            <div class="d-flex flex-column align-center">
              <p class="pa-0 ma-0 myCardIcon">
                <span class="mgc_exit_fill"> </span>
              </p>
              <h3>Exit</h3>
            </div>

            </v-card>
          </v-col>
        </v-row>  -->
      </v-container>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SummonsPage",
  props: {},
  data() {
    return {};
  },
  methods: {
    NavigateToPending() {
      console.log("Method Called")
        this.$router.push("/pending");
        // this.$router.push({ name: 'pending', params: { id: "Pending" }})
    },
  
    NavigateToSearch() {
      console.log("Method Called")
        this.$router.push("/search");
    },
  
    NavigateToVSummon() {
      console.log("Method Called")
        this.$router.push("/viewsummon");
    },
  
    NavigateToProfile() {
      console.log("Method Called")
        this.$router.push("/profile");
    },
  
    NavigateToSetting() {
      console.log("Method Called")
        this.$router.push("/setting");
    },
  
    NavigateToExit() {
      console.log("Method Called")
        this.$router.push("/");
    },
  


  },
  created() {},
};
</script>
  