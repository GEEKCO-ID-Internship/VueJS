<template>
  <keep-alive>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
    >
      <component :is="currentComponent" @closed="setDialogStatus"> </component>
    </v-dialog>
  </keep-alive>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    login: () => import("./login.vue"),
    // console.log("componentlogin")
  },
  computed: {
    ...mapGetters({
      dialogStatus: "dialog/status",
      currentComponent: "dialog/component",
    }),
    dialog: {
      get() {
        return this.dialogStatus;
      },
      set(value) {
        this.setDialogStatus(value);
      },
    },
  },
  methods: {
    ...mapActions({
      setDialogStatus: "dialog/setStatus",
    }),
  },
};
</script>
