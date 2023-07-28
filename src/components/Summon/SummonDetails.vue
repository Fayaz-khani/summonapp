<template>
  <div>
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
        to="/pending"
        class="pa-0 ma-0 myCardIcon"
      >
        <span class="mgc_arrow_left_line"> </span>
      </v-btn>
      <h2 class="ma-auto HeaderItem" width="100%">Details</h2>
    </v-app-bar>
    <div>
      <v-container>
        <v-row class="mt-2">
          <!-- <h2>Details of a summon</h2> -->
          <v-col cols="12" class="pa-0">
            <v-text-field
              tile
              dense
              v-model="SummonModel.caseId"
              label="Case Id"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              tile
              dense
              v-model="SummonModel.caseTitle"
              label="Case Title"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              tile
              dense
              v-model="SummonModel.court"
              label="Court"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.name"
              label="Name"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.address"
              label="Address"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.issueDate"
              label="Issue Date"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.appearanceDate"
              label="Appearance Date"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.contactNo"
              label="Contact No"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.cnic"
              label="Cnic"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.subject"
              label="Subject"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.remarks"
              label="Remarks"
              color="#3F4775"
            >
            </v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.latitude"
              label="Latitude"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.longitude"
              label="Longitude"
              color="#3F4775"
            ></v-text-field>
            <v-text-field
              dense
              v-model="SummonModel.status"
              label="Status"
              color="#3F4775"
            ></v-text-field>
            <v-layout>
              <v-spacer></v-spacer>
              <v-col cols="3">
                <v-text-field
                  type="file"
                  dense
                  hide-details
                  class="ThemeColor"
                  rounded
                  depressed
                 placeholder="Add Image" 
                >
                </v-text-field>
              </v-col>
            </v-layout>
            
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
      SummonModel: [],
    };
  },
  methods: {
    getCurrentSummon() {
      // console.log("response is here: ", this.$route.params.id);
      //   this.SummonModel = this.$route.params.id;
      localStorage.setItem("summonId", this.$route.params.id.summonId);
      var summon_id = localStorage.getItem("summonId");
      // console.log(summon_id)
      // console.log(localStorage.getItem("summonId"));
      var formData = new FormData();
      formData.append("summonId", summon_id);
      axios
        .post(config.BaseUrl + "/API/Summon/Get", formData)
        .then((res) => {
          this.SummonModel = res.data.data;
          //   console.log("this is the data" + this.SummonModel);
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
  },
  created() {
    this.getCurrentSummon();
  },
};
</script>