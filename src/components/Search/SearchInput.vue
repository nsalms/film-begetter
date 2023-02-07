<template>
  <form class="search-form" @submit.prevent="formSubmit">
    <input
      class="text-field"
      type="search"
      enterkeyhint="search"
      placeholder="Search Movies or TV Shows"
      v-bind="$attrs"
      v-model="query"
      @input="$emit('input', $event.target.value)"
    />
    <span class="icon icon-search"></span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: this.$route.params.query,
    };
  },
  methods: {
    formSubmit() {
      this.$router.push({ path: `/search/${this.query}` }); // -> /search/your_query
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  position: relative;
  display: flex;
  align-items: center;
}
.icon {
  --icon-size: 1.5rem;
  --icon-color: #{$text-color-gray};
  position: absolute;

  // Make icon not clickable
  &.icon-search {
    pointer-events: none;
    left: 1rem;
  }
}
</style>
