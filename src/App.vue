<template>
  <div id="app">
    <NavBar msg="首頁" />
    <router-view></router-view>
    <loading :active.sync="$store.state.isLoading"></loading>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
  },
  created() {
    console.log("created");
    this.increment("app.vue");
  },
  methods: {
    ...mapActions(["increment"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
