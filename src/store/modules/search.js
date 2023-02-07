import axios from "axios";

// initial state
const state = {
  result: [],
};

// getters
const getters = {
  allResult(state) {
    return state.result;
  },
  countTotal(state) {
    return state.result.length;
  },
};

// actions
const actions = {
  async fetchSearch({ commit }, query) {
    const endPoint = "search?title";
    // Fetch API
    const res = await axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/${endPoint}=${query}`)
      .catch((err) => {
        // Handle error
        // commit("errorDetails", err);
        console.log(err);
      });

    // Commit
    commit("updateResult", res.data.data);
  },
};

// mutations
const mutations = {
  updateResult(state, result) {
    state.result = result.map((a) => ({
      ...a,
      poster: `${import.meta.env.VITE_API_BASE_URL}/poster?id=${a.id}`,
    }));
  },
  clearResult(state) {
    state.result = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
