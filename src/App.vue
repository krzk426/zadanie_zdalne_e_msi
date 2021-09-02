<template>
  <v-app>
    <v-main>
      <MainScreen />
    </v-main>
  </v-app>
</template>

<script>
import MainScreen from "./screens/MainScreen.vue";

export default {
  name: "App",

  components: {
    MainScreen,
  },

  data: () => ({
    //
  }),
};
</script>
