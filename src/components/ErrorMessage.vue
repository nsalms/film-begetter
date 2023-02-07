<template>
  <div class="error">
    <!-- ERROR TITLE -->
    <h4>{{ name }}</h4>

    <!-- ERROR MESSAGE -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    code: String,
    message: String,
  },
};
</script>

<style lang="scss" scoped>
.error {
  background: rgba($color-danger, 0.3);
  border: 1px solid $color-danger;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
}
</style>
