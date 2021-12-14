<template>
  <section class="films">
    <div class="cards">
      <Card :data="{ name: 'films', count: dashboardData.filmsCount }" />
      <Card
        :data="{ name: 'starships', count: dashboardData.starshipsCount }"
      />
      <Card :data="{ name: 'people', count: dashboardData.peopleCount }" />
      <Card :data="{ name: 'vehicles', count: dashboardData.vehiclesCount }" />
      <Card :data="{ name: 'species', count: dashboardData.speciesCount }" />
    </div>
    <div class="list">
      <p>Films</p>
      <table>
        <thead>
          <tr>
            <th>Film Title</th>
            <th>Director</th>
            <th>Producer</th>
            <th>Release Date</th>
            <th>Episode ID</th>
            <th>Characters</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="film in allFilms" :key="film._id">
            <td>{{ film.properties.title }}</td>
            <td>{{ film.properties.director }}</td>
            <td>{{ film.properties.producer }}</td>
            <td>{{ film.properties.release_date }}</td>
            <td>{{ film.properties.uid }}</td>
            <td>{{ film.properties.characters[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "./Card.vue";
export default {
  name: "Films",

  data() {
    return {};
  },
  components: { Card },
  computed: {
    ...mapGetters(["allFilms", "dashboardData"]),
  },
  methods: {
    ...mapActions(["fetchFilms", "fetchDashData"]),
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  margin-bottom: 70px;
}
.list {
  padding: 80px 35px;
}
</style>
