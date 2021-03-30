<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Vue Demo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/Home">{{msg}}</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/List">列表</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.msg)
  },
  props: {
    msg: String,
  },
};
</script>

<style>
</style>