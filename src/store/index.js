import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    characters: [],
    bestFriend: "Daverose",
  },
  getters: {
    getAllCharacters: (state) => {
      return state.characters;
    },
    getAllFilms(state) {
      return state.films;
    },
    getHopefulFilms(state) {
      return state.films.filter((film) =>
        film.title.toLowerCase().includes("hope")
      );
    },
  },
  mutations: {
    POPULATE_FILMS(state, payload) {
      state.films.push(payload);
    },
    POPULATE_CHARACTERS(state, payload) {
      state.characters.push(...payload);
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await axios.get(
          "https://anapioficeandfire.com/api/characters/"
        );
        console.log(response.data);
        commit("POPULATE_CHARACTERS", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
