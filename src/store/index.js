import { createStore } from "vuex";
import films from "./modules/catalog";
import search from "./modules/search";
import details from "./modules/details";

export default createStore({
  modules: {
    films,
    search,
    details,
  },
});
