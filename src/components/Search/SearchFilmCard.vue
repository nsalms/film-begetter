<script setup>
import LazyImage from "../LazyImage.vue";
</script>

<template>
  <!-- THE CARD IS A LINK -->
  <router-link :to="'/movie/' + id" class="card">
    <div class="card-frame">
      <!-- IMAGE -->
      <div class="card__img">
        <LazyImage
          style="aspect-ratio: 2/3"
          :src="imgPath"
          :alt="title"
        ></LazyImage>
      </div>
      <!-- #IMAGE -->

      <!-- DESCRIPTION -->
      <div class="card__description">
        <h2 class="card__title text-tight">{{ title }}</h2>
        <div class="card__date" v-if="releaseDate">
          <span class="icon icon-date"></span>
          <span>{{ releaseDate }}</span>
        </div>
        <p class="card__overview" v-if="overview">
          {{ overview }}
        </p>
      </div>
      <!-- #DESCRIPTION -->
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    imgPath: String,
    releaseDate: String,
    overview: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  &-frame {
    display: flex;
    gap: 1.75rem;

    @media (--sm-viewport) {
      gap: 1rem;
    }
  }

  &__title {
    margin: 0;

    @media (--sm-viewport) {
      font-size: 1rem;
    }
  }

  &__img {
    flex-shrink: 0;
    width: 12rem;

    @media (--sm-viewport) {
      width: 8rem;
    }
  }

  &__date {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: $text-color-warning;

    @media (--sm-viewport) {
      font-size: 0.75rem;
    }

    .icon {
      --icon-color: #{$text-color-warning};

      margin-right: 0.5rem;
    }
  }

  &__overview {
    display: -webkit-box;
    margin-top: 1rem;
    overflow: hidden;
    color: $text-color-gray;
    text-overflow: ellipsis;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;

    @media (--sm-viewport) {
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
}
</style>
