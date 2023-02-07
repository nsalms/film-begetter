<template>
  <div class="module-heading">
    <!-- MAIN TITLE -->
    <h1 class="text-tight">
      <slot></slot>
    </h1>
    <!-- #MAIN TITLE -->

    <!-- SMALL SUB TEXT -->
    <span class="module-heading__sub" v-if="count">&nbsp;({{ count }})</span>
    <!-- #SMALL SUB TEXT -->
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
};
</script>

<style lang="scss" scoped>
.module-heading {
  color: $text-color-muted;
  margin: 2rem 0;
  display: flex;
  align-items: center;

  &__sub {
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>
