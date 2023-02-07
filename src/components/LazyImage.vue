<script setup>
import LoaderView from "./LoaderView.vue";
</script>

<template>
  <div class="lazy-img">
    <img v-bind="$attrs" @load="onLoad" @error="replaceByDefault" />
    <div class="lazy-img__skeleton" v-if="loading">
      <LoaderView></LoaderView>
    </div>
  </div>
</template>

<script>
import img from "/src/assets/img/picture.svg";
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    },
    replaceByDefault(e) {
      e.target.wight = "50%";
      e.target.src = img;
    },
  },
  // inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.lazy-img {
  border-radius: 0.5rem;
  overflow: hidden;
  display: block;
  position: relative;

  &__skeleton {
    background: $background-primary;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  > img {
    vertical-align: bottom;
    object-fit: cover;
    border-style: none;
    width: 100%;
  }
}
</style>
