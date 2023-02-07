<script setup>
import ModuleHeading from "../components/ModuleHeading.vue";
import SearchFilmCard from "../components/Search/SearchFilmCard.vue";
import LoaderView from "../components/LoaderView.vue";
import SearchInput from "../components/Search/SearchInput.vue";
</script>

<template>
  <SearchInput v-model="query"></SearchInput>
  <ModuleHeading :count="countTotal">
    Results for "{{ $route.params.query }}"
  </ModuleHeading>
  <!-- SEARCH GRID -->

  <div class="grid grid-two">
    <SearchFilmCard
      v-for="result in allResult"
      :key="result.id"
      :id="result.id"
      :title="result.title"
      :imgPath="result.poster"
      :releaseDate="result.release_date"
      :overview="result.overview"
    ></SearchFilmCard>
  </div>
  <!-- #SEARCH GRID -->

  <!-- PAGINATION -->
  <div class="pagination" v-if="loading">
    <LoaderView></LoaderView>
  </div>
  <!-- #PAGINATION -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      query: this.$route.params.query,
      loading: true,
    };
  },
  computed: {
    ...mapGetters("search", ["allResult", "countTotal"]),
  },
  created() {
    // Fetch from the store after the component is created
    this.fetchData();
  },
  watch: {
    // Fetch data when the route changes
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      this.query = this.$route.params.query;
      this.$store.commit("search/clearResult");
      this.loading = true;
      await this.$store.dispatch("search/fetchSearch", this.query);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
