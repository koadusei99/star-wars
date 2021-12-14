<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/starships">Starships</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/vehicles">Vehicles</router-link>
      <router-link to="/species">Species</router-link>
    </div>
    <p v-for="character in getAllCharacters" :key="key">
      {{ character }}
    </p>
    <p>{{ getAllCharacters }}</p>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  mounted() {
    () => this.getCharacters();
  },

  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["getAllCharacters"]),
  },
  methods: {
    ...mapActions(["getCharacters"]),
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  float: left;
  margin: 50px;
}
</style>
