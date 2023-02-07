import axios from "axios";

// initial state
const state = {
  details: {},
};

// getters
const getters = {
  getDetails(state) {
    return state.details;
  },
};

// actions
const actions = {
  async fetchDetails({ commit }, id) {
    const endPoint = "movie?id";
    // Fetch API
    const res = await axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/${endPoint}=${id}`)
      .catch((err) => {
        // Handle error
        // commit("errorDetails", err);
        console.log(err);
      });

    // Commit
    commit("updateDetails", res.data.data);
  },
};

// mutations
const mutations = {
  updateDetails(state, details) {
    state.details = details[0];
  },
  clearDetails(state) {
    state.details = {};
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
