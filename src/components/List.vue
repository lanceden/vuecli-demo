<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row v-for="(item, index) in $store.state.newsList" :key="index">
      <img width="200" height="200" :src="item.News_ImgUrl" alt="13" />
      <div>
        <span>{{ item.News_Content }}</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.queryNews(this.$http);
  },
  methods: {
    ...mapActions(["queryNews"]),
  },
};
</script>

<style scoped>
.gridItemBox {
  height: 300px;
  width: 100%;
  border: 2px solid brown;
  margin-top: 16px;
}
</style>