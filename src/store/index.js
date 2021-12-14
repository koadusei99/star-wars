import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    people: [],
    vehicles: [],
    species: [],
    starships: [],
    dashFetched: false,
    dashData: {},
    bestFriend: "Daverose",
  },
  getters: {
    dashboardData: (state) => {
      return state.dashData;
    },
    allFilms: (state) => {
      return state.films;
    },
  },
  mutations: {
    TOGGLE_DASH_FETCHED(state) {
      state.dashFetched = !state.dashFetched;
    },
    POPULATE_DASHBOARD(state, payload) {
      state.dashData = payload;
    },
    POPULATE_FILMS(state, payload) {
      state.films = payload;
    },
    POPULATE_PEOPLE(state, payload) {
      state.people = payload;
    },
    POPULATE_VEHICLES(state, payload) {
      state.vehicles = payload;
    },
    POPULATE_STARSHIPS(state, payload) {
      state.starships = payload;
    },
    POPULATE_SPECIES(state, payload) {
      state.species = payload;
    },
  },
  actions: {
    async fetchDashData({ state, commit }) {
      let stats = {};
      if (state.dashFetched) {
        return;
      }
      try {
        let response = await axios.get("https://www.swapi.tech/api/films/");
        console.log(response.data);
        if (response.status === 200) {
          commit("POPULATE_FILMS", response.data.result);
          stats.filmsCount = response.data.result.length;
        }

        response = await axios.get("https://www.swapi.tech/api/people/");
        console.log(response.data);
        if (response.status === 200) {
          commit("POPULATE_PEOPLE", response.data.results);
          stats.peopleCount = response.data.total_records;
        }
        response = await axios.get("https://www.swapi.tech/api/starships/");
        console.log(response.data);
        if (response.status === 200) {
          commit("POPULATE_STARSHIPS", response.data.results);
          stats.starshipsCount = response.data.total_records;
        }
        response = await axios.get("https://www.swapi.tech/api/vehicles/");
        console.log(response.data);
        if (response.status === 200) {
          commit("POPULATE_VEHICLES", response.data.results);
          stats.vehiclesCount = response.data.total_records;
        }
        response = await axios.get("https://www.swapi.tech/api/species/");
        console.log(response.data);
        if (response.status === 200) {
          commit("POPULATE_SPECIES", response.data.results);
          stats.speciesCount = response.data.total_records;
        }
        commit("POPULATE_DASHBOARD", stats);
        commit("TOGGLE_DASH_FETCHED");
      } catch (error) {
        console.error(error);
      }
    },
    async fetchFilms({ commit }) {
      try {
        const response = await axios.get("https://www.swapi.tech/api/films/");
        commit("POPULATE_FILMS", response.data.result);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
