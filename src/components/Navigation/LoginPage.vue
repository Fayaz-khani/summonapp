<template>
  <div class="LoginPage">
    <v-app class="LoginPageTheme">
      <v-row color="grey">
        <v-col class="d-flex align-center justify-center" cols="12" cols-md="4">
          <v-card
            justify="center"
            width="100%"
            elevation="0"
            class="pa-5 mt-0 pt-0 LoginCard"
          >
            <v-img
              class="mx-auto mt-0 pt-0"
              width="31%"
              src="../../assets/images/logo/logo.jpeg"
            >
            </v-img>
            <v-col cols="12"  color="" class="text-center pa-0 my-6 ThemeTextColor">
              <h1>
                Welcome
              </h1>
              <p>
                 Login to Continue
              </p>
            </v-col>
            <v-col cols="12" class="pa-0 mb-6">
              <v-text-field
                prepend-inner-icon="mdi-account"
                v-model="userName"
                label="Username"
                outlined
                hide-details
                tile
                color="grey"
                class="custom-text-field custom-input border-right"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-0 mb-2">
              <v-text-field
                tile
                prepend-inner-icon="mdi-lock"
                :append-icon="show1 ? 'ri-eye-line' : 'ri-eye-close-line'"
                :type="show1 ? 'text' : 'password'"
                hint="At least 5 characters"
                @click:append="show1 = !show1"
                label="Password"
                outlined
                color="grey"
                v-model="password"
                class="custom-text-field"
                @keyup.enter="signIn"
              ></v-text-field>
       
            </v-col>

            <v-col cols="12" class="pa-0" >
              <v-btn

              dark
              tile
              height="45"
              depressed
              elevation="0"
              class="pa-0 ThemeColor"
              @click="signIn"
              block
            >
              <!-- :disabled="checkDesable(userName) && checkDesable(password)" -->
              Log In
            </v-btn>
            </v-col>

          </v-card>
        </v-col>
        <v-snackbar color="red"  top v-model="snackbar" :timeout="timeout">
          {{ snakBarTxt }}
  
          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </template>
        </v-snackbar>
  
        <v-progress-circular
        
          v-if="loader"
          indeterminate
          size="30"
          width="3"
          color="#3F4775"
          class="myloader "
        ></v-progress-circular>
      </v-row>
      
    </v-app>
  </div>
</template>
  
  <script>
  import config from "../../assets/configuration/config.js";
  import axios from "axios";
export default {
  name: "LoginPage",
  props: {},
  data() {
    return {
       count: 0,
    snackbar: false,
    snakBarTxt: "Email or Password incorrect",
    timeout: 2000,
    userName: "",
    password: "",
    loader: false,
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `The password you entered don't match`,
    },
    };
  },
  methods:
  {
    checkValue(value) {
      if (!value) {
        return true;
      } else {
        return false;
      }
    },
    countCharacters() {
      this.count = this.password.length;
    },
    checkDesable(value) {
      if (value === "") {
        return true;
      } else {
        return false;
      }
    },
    signIn() {
      this.loader = true;
      // console.log(this.userName);
      // console.log(this.password);
      axios
        .post(config.BaseUrl + "/api/Auth/authenticate", {
          username: this.userName,
          password: this.password,
          newPassword: "",
          role: 100,
        })
        .then((res) => {
          //   console.log(res)
          this.loader = false;
          if (res.data.role == 100) {
            (this.$store.state.loggedIn = true),
              localStorage.setItem("loggedIn", true);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("LoggedInUser", res.data.userId);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("username", res.data.username);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + res.data.token;
            this.$router.push("/summons");
          } else {
            this.snakBarTxt = "You are Unauthorized!";
            this.snackbar = true;
          }
        })
        .catch((err) => {
          console.log(err);
          this.snakBarTxt = "Email Or Password Invalid";
          this.loader = false;
          this.snackbar = true;
        });
    },
    logout() {
      this.$store.state.loggedIn = false;
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("adminInfo");
      localStorage.removeItem("LoggedInUser");
      localStorage.removeItem("role");
    },
  },
  created(){
    this.logout()
  }
};
</script>

<style scoped>

.myloader{
  position : absolute;
  top: 30%;
   left: 48.5%; 
}
</style>
  
  