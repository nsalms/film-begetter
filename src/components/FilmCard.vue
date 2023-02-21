<script setup>
import LazyImage from "./LazyImage.vue";
</script>

<template>
  <!-- THE CARD IS A LINK -->
  <router-link :to="'/movie/' + id" class="card film-card">
    <!-- UPPER FRAME LAYER -->
    <div class="card-frame">
      <!-- RATING -->
      <div class="film-card__rating" v-if="rating">
        <span class="icon icon-star"></span>
        <span>{{ rating }}</span>
      </div>

      <!-- MAIN IMAGE -->
      <LazyImage
        style="aspect-ratio: 2/3"
        :src="imgPath"
        :alt="title"
      ></LazyImage>

      <!-- TITLE -->
      <h4 class="film-card__title" v-if="title" :title="title">
        {{ title }}
      </h4>
    </div>
    <!-- #UPPER FRAME LAYER -->

    <!-- BLURRY SUB BACKGROUND -->
    <div class="film-card__sub-img">
      <!-- SUB IMAGE -->
      <img :src="imgPath" alt="" />
    </div>
    <!-- #BLURRY SUB BACKGROUND -->
  </router-link>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    rating: String,
    imgPath: String,
  },
};
</script>

<style lang="scss" scoped>
/**
 * I use several approaches to blur sub image.
 * I noticed that desktop browsers perform better using filter: blur,
 * instead on iPhone it's better using backdrop-filter: blur
 */
.card-frame {
  padding: 0.5rem;

  @supports (-webkit-touch-callout: none) {
    backdrop-filter: blur(80px); // for iPhone
  }
}

.film-card {
  display: block;
  transform: translateZ(0);
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(1.05);
  }

  // Put sub image behind the upper frame layer
  &__sub-img {
    position: absolute;
    top: 0;
    z-index: -1;
    padding: 0.5rem;
    user-select: none;

    @supports not (-webkit-touch-callout: none) {
      filter: blur(80px); // for desktops

      > img {
        transform: scale(1.25); // scale image for more effective blur
      }
    }
  }

  &__rating {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: $text-color-warning;
    background: rgba(#000, 0.65);
    border-radius: 0.5rem;
    backdrop-filter: blur(8px);

    .icon {
      --icon-color: #{$text-color-warning};

      margin-right: 0.5rem;
    }
  }

  &__title {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    overflow: hidden;
  }
}
</style>
