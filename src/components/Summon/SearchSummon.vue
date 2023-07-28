<template>
  <div class="lightBG" height="100vh">
    <v-app-bar
      app
      height="60"
      elevation="0"
      color="#3F4775"
      class="borderBtm"
      dark
    >
      <v-btn
        color="#3F4775"
        text
        icon
        link
        to="/summons"
        class="pa-0 ma-0 myCardIcon"
      >
        <span class="mgc_arrow_left_line"> </span>
      </v-btn>
      <v-col class="mb-1 d-flex pa-0" cols="10">
        <v-text-field
          v-model.trim="filteredText"
          color="#ffffff"
          append-icon="mdi-magnify"
          class="darken-2 custom-input"
          clearable
          dense
          hide-details
          outlined
          placeholder="Search"
          @click:append="GetAllSummon()"
          @input="GetAllSummon()"
          @keyup.enter="GetAllSummon()"
        ></v-text-field>
      </v-col>
      <!--   <h2 
        class="ma-auto HeaderItem" width="90%">Summon</h2>
       -->
    </v-app-bar>
    <div>
      <!-- <v-container v-if="summonList">
        <v-row>
          <h5 class="ma-auto grey--text mt-2" width="100%">Search...</h5>
        </v-row>
      </v-container> -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-list class="lightBG" rounded-1 width="100%" flat>
              <!-- <v-subheader>REPORTS</v-subheader> -->
              <v-list-item-group
                class="pa-0"
                v-model="selectedItem"
                
              >
                <v-list-item
                  class="transparentBG pa-0 my-3"
                  v-for="(item, i) in summonList"
                  :key="i"
                  link
                  @click="navigateToDetails(item)"
                  
                >
                  <v-list-item-content class="elevation-0 pa-4">
                    <!-- <span>Name</span> -->
                    <div class="d-flex justify-space-between">
                      <div>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.caseTitle"
                        ></v-list-item-title>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.name"
                        ></v-list-item-title>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.address"
                        ></v-list-item-title>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.cnic"
                        ></v-list-item-title>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.court"
                        ></v-list-item-title>
                      </div>
                      <div class="text-end">
                        <v-list-item-title
                          class="my-2"
                          v-text="i + 1"
                        ></v-list-item-title>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.issueDate"
                        ></v-list-item-title>
                        <v-list-item-title
                          class="my-2"
                          v-text="item.contactNo"
                        ></v-list-item-title>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import config from "../../assets/configuration/config.js";
import axios from "axios";
export default {
  data() {
    return {
      selectedItem: 1,
      summonList : [],
      filteredText:"",
    };
  },

  methods: {
    navigateToDetails(item) {
      console.log(item)
      // Navigate to the details component and pass the selected item
      this.$router.push({ name: 'summondetails', params: { id: item }})
      // "{ name: 'addsummon', params: { id: item } }"
    },
    GetAllSummon() {
      // console.log(localStorage.getItem("LoggedInUser"))
      this.loader = true;
      axios
        .post(config.BaseUrl + "/api/Summon/GetAll", {
          pageSize: 25,
          page: 1,
          filterText: this.filteredText,
          summonStatus: 10,
          userId: localStorage.getItem("LoggedInUser"),
          role: localStorage.getItem("role"),
        })
        .then((res) => {
          this.summonList = res.data.data;
          console.log(this.summonList)
          // this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err);
        });
    },
 },
  created() {
    // this.clearlocalStorage();
    this.GetAllSummon();
  },
};
</script>