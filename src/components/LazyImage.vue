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
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 0.5rem;

  &__skeleton {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: $background-primary;
  }

  > img {
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    border-style: none;
  }
}
</style>
