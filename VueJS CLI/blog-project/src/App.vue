<template>
  <!-- App.vue -->

  <v-app>
    <alert/>
    <!-- <v-snackbar
      v-model="snackbarStatus"
      color="success"
      buttom
      timeout="2000"
      multi-line
      outlined
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbarStatus = false">
          Close
        </v-btn>
      </template></v-snackbar
    > -->

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/77.jpg">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Risang Ganie Salam</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1" @click="login">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, index) in menus"
          :key="`menu-${index}`"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark @click="logout">
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="success" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>rgsApp</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->

      <v-container fluid>
        <!-- If using vue-router -->
        <v-slide-y-transition>
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-main>

    <v-footer app>
      @risanggani | VueJS
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import alert from './components/alert.vue';
// import components from './components/dialog.vue';

export default {
  components:{alert},
  name: "App",

  data: () => ({
    drawer: false,
    menus: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Blogs", icon: "mdi-note", route: "/blogs" },
    ],
    guest: true,
    
  }),
  methods: {
    logout() {
      this.guest=true
      this.setAlert({
        status:true,
        color:'success',
        text:'Anda berhasil logout',
      })
    },
    login() {
      this.setDialogComponent({'component':'login'})
    },
    ...mapActions({
      setAlert : 'alert/set',
      setDialogComponent: 'dialog/setComponent'
    }),
  },
  mounted(){
    this.snackbarStatus=true
  }
};
</script>
