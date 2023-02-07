<template>
  <div class="footer">
    <!-- CONTAINER -->
    <div class="wrap container container-fluid">
      <!-- About -->
      <p>This site is built with ❤️ using VueJS</p>

      <!-- Links -->
      <p>
        <a target="_blank" href="https://github.com/nsalms/film-begetter">
          GitHub Project <span class="icon icon-arrow-right"></span>
        </a>
      </p>
      <!-- #Links -->
    </div>
    <!-- #CONTAINER -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 2rem 0;
}

// Change icon color
.icon {
  --icon-color: #{$background-accent};
}
</style>
