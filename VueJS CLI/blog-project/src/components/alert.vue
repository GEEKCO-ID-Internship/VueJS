<template>
  <v-snackbar
    v-model="alert"
    :color="color"
    bottom
    multi-line
    outlined
    timeout="3000"
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="close">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "alert",
  computed: {
    ...mapGetters({
      status: "alert/status",
      color: "alert/color",
      text: "alert/text",
    }),
    alert: {
      get() {
        return this.status;
      },
      set(value) {
        this.setAlert({
          status: value,
        });
      },
    },
  },
  method: {
    ...mapActions({
      setAlert: "alert/set",
    }),
    close() {
      this.setAlert({
        status: false,
      })
    },
  },
};
</script>
