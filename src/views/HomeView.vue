<script setup>
import FilmCard from "../components/FilmCard.vue";
import LoaderView from "../components/LoaderView.vue";
import ModuleHeading from "../components/ModuleHeading.vue";
import SearchInput from "../components/Search/SearchInput.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
</script>

<template>
  <SearchInput></SearchInput>

  <ModuleHeading>You might like</ModuleHeading>

  <div class="film-list">
    <!-- IF ERROR -->
    <div class="pagination" v-if="getError">
      <ErrorMessage
        :name="getError.name"
        :code="getError.code"
        :message="getError.message"
      ></ErrorMessage>
    </div>
    <!-- #IF ERROR -->

    <!-- CATALOG GRID -->
    <div class="grid">
      <FilmCard
        v-for="film in getFilms"
        :key="film.id"
        :id="film.id"
        :title="film.title"
        :imgPath="film.poster_path"
        :rating="film.vote_average"
      ></FilmCard>
    </div>
    <!-- #CATALOG GRID -->

    <!-- PAGINATION -->
    <div class="pagination">
      <LoaderView v-if="loading && !getError"></LoaderView>
      <button class="btn" v-on:click="fetchData()" v-if="!loading">
        Show more
      </button>
    </div>
    <!-- #PAGINATION -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      page: 0, // will increment after first fetching
    };
  },
  created() {
    // Fetch from the store after the component is created
    if (!this.getFilms.length) {
      this.fetchData();
    }
  },
  computed: {
    ...mapGetters("films", ["getFilms", "getError"]),
  },
  methods: {
    async fetchData() {
      this.loading = true;
      await this.$store.dispatch("films/getData");
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
