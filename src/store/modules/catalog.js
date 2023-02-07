import axios from "axios";

const state = () => ({
  films: [],
  page: 0,
  error: 0,
});

// getters
const getters = {
  getFilms(state) {
    return state.films;
  },
  getError(state) {
    return state.error;
  },
};

// actions
const actions = {
  async getData({ commit, state }) {
    const endPoint = "movies/popular?page";
    const res = await axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/${endPoint}=${++state.page}`)
      .catch((err) => {
        commit("catchError", err);
        console.log(err);
      });

    commit("updateFilms", res.data.data);
  },
};

// mutations
const mutations = {
  updateFilms(state, films) {
    state.films.push(
      ...films.map((a) => ({
        id: a.id,
        title: a.title,
        poster_path: "https://themoviedb-api-one.vercel.app/poster?id=" + a.id,
        vote_average: (a.user_score / 10).toFixed(1),
      }))
    );
  },
  catchError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
