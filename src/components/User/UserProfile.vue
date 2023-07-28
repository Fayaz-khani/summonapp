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
        to="/summons"
        class="pa-0 ma-0 myCardIcon"
      >
        <span class="mgc_arrow_left_line"> </span>
      </v-btn>
      <h2 class="ma-auto HeaderItem" width="100%">Profile</h2>
    </v-app-bar>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" class="mt-2">
       
                <v-text-field
                  tile
                  depressed
                  dense
                  outlined
                  label=" Name "
                  disabled
                  v-model="userName"
                >
                </v-text-field>
                <v-select
                  tile
                  depressed
                  dense
                  outlined
                  :items="roleArr"
                  label="Role"
                  v-model="select"
                  item-value="value"
                  item-text="text"
                  return-object
                  single-line
                  disabled
                >
                </v-select>

          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userName: "",
      select: "",
      userRole:{ },
      roleArr:[
        { text: "Admin", value: '100'},
        { text: "Balaf", value: '200'}
      ]
    };
  },
  methods: {
    UpdateUser() {
      // console.log("User profile Updated");
    },
    pickData() {
      this.userId =  localStorage.getItem("LoggedInUser");
      this.userName =  localStorage.getItem("username");
      // localStorage.setItem("role",200)
     if(localStorage.getItem("role")==100) this.select= { text: 'Admin', value: localStorage.getItem("role") };
     else this.select= { text: 'Balaf', value: localStorage.getItem("role") };
      // console.log(this.select)
    },
  },
  created() {
    this.pickData();
  },
};
</script>

<style>
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  line-height: 0.9;
}
</style>