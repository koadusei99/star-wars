<template>
  <div class="home">
    <div class="sidebar">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/starships">Starships</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/vehicles">Vehicles</router-link>
      <router-link to="/species">Species</router-link>
    </div>
    <div class="main">
      <div class="nav"><p>NAVBAR</p></div>
      <div class="filter"><p>Date Tings</p></div>
      <router-view class="view" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  mounted: function () {
    this.fetchDashData();
  },
  computed: {
    ...mapGetters(["dashboardData"]),
  },
  methods: {
    ...mapActions(["fetchDashData"]),
  },
};
</script>

<style scoped>
.home {
  display: flex;
}
.nav {
  padding: 10px;
}
.main {
}
.sidebar {
  display: flex;
  flex-direction: column;
  float: left;
}
.view {
  border: 2px solid red;
  padding: 20px;
  background-color: rgba(133, 49, 49, 0.2);
}
</style>
