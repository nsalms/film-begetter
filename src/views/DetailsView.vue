<script setup>
import LazyImage from "../components/LazyImage.vue";
import LoaderView from "../components/LoaderView.vue";
</script>

<template>
  <div class="pagination" v-if="loading">
    <LoaderView></LoaderView>
  </div>
  <div v-if="!loading">
    <!-- BACKDROP IMAGE -->
    <div class="details-header">
      <LazyImage
        class="details-header__img"
        style="aspect-ratio: 12/5"
        :src="`https://themoviedb-api-one.vercel.app/backdrop?id=${$route.params.id}`"
      ></LazyImage>

      <!-- TITLE -->
      <div class="details-header__title-wrapper" v-if="getDetails.title">
        <div class="details-header__title">
          <h1>{{ getDetails.title }}</h1>
        </div>
      </div>
      <!-- #TITLE -->
    </div>
    <!-- #BACKDROP IMAGE -->

    <!-- DETAILS -->
    <div class="details">
      <!-- MAIN IMAGE -->
      <div class="details__img">
        <LazyImage
          style="aspect-ratio: 2/3"
          :src="`https://themoviedb-api-one.vercel.app/poster?id=${$route.params.id}&size=2`"
          :alt="getDetails.title"
        ></LazyImage>
      </div>

      <!-- DESCRIPTION -->
      <div class="details__info">
        <!-- TAGLINE -->
        <h2 v-if="getDetails.tagline">{{ getDetails.tagline }}</h2>
        <!-- OVERVIEW -->
        <p class="details__text">
          {{ getDetails.overview }}
        </p>
        <!-- RATING -->
        <div class="details__rating">
          <span class="icon icon-star"></span>
          <span>{{ getDetails.user_score }}</span>
        </div>
        <!-- FACTS -->
        <div class="details__facts">
          <p v-for="(value, key) in facts" :key="key">
            <small>{{ key }}</small>
            {{ value }}
          </p>
        </div>
      </div>
      <!-- #DESCRIPTION -->
    </div>
    <!-- #DETAILS -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters("details", ["getDetails"]),
    facts() {
      return {
        "Release Date": this.getDetails.release,
        "Run time": this.getDetails.runtime,
        "Genres": this.getDetails.genre && this.getDetails.genre.join(", "),
        ...this.getDetails.movie_info,
      };
    },
  },
  created() {
    // Fetch from the store after the component is created
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.$store.commit("details/clearDetails");
      await this.$store.dispatch("details/fetchDetails", this.$route.params.id);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.details-header {
  position: relative;
  margin-bottom: 9.5rem;

  @media (--sm-viewport) {
    margin-bottom: 0;
  }

  &__img {
    border-radius: 2.5rem;

    @media (--sm-viewport) {
      margin: 0 -1rem;
      border-radius: 0;
    }
  }

  &__title-wrapper {
    position: absolute;
    bottom: 0;
    padding: 5rem;
    transform: translate(0, 50%);

    @media (--sm-viewport) {
      position: relative;
      text-align: center;
      transform: none;
    }

    @media (--md-viewport) {
      padding: 1.5rem 0;
    }
  }

  &__title {
    padding: 2.5rem;
    background: rgba($background-primary, 0.8);
    border-radius: 1.5rem;
    backdrop-filter: blur(12px);

    @media (--sm-viewport) {
      padding: 1rem;
    }

    > h1 {
      margin: 0;
    }
  }
}

.details {
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 5rem;

  @media (--md-viewport) {
    gap: 2.5rem;
    padding: 0;
  }

  @media (--sm-viewport) {
    flex-direction: column;
    align-items: center;
  }

  &__img {
    width: 100%;
    max-width: 31rem;
  }

  &__info {
    width: 100%;
    max-width: 31rem;

    > *:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  &__text {
    color: #8e95a9;
    font-size: 1.25rem;
  }

  &__rating {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    color: $text-color-warning;
    background: rgba(#000, 0.65);
    border-radius: 0.5rem;

    .icon {
      --icon-color: #{$text-color-warning};

      margin-right: 0.5rem;
    }
  }

  &__facts {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 5rem;
    justify-content: space-between;
    font-size: 1.25rem;

    p small {
      display: block;
      margin-bottom: 0.5rem;
      color: $text-color-muted;
      font-size: 1rem;
    }
  }
}
</style>
