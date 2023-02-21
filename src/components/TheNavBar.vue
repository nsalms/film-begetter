<template>
  <nav class="navbar">
    <!-- CONTAINER -->
    <div class="wrap container container-fluid">
      <div class="navbar__wrapper">
        <!-- LOGO -->
        <div class="navbar__logo">
          <router-link to="/">
            <img src="@/assets/img/logo.svg" alt="" />
          </router-link>
        </div>
        <!-- #LOGO -->
        <!-- MENU -->
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link to="/">Catalog</router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/favorites">My Favorites</router-link>
          </li>
          <li class="navbar__item">
            <a target="_blank" href="https://github.com/nsalms">
              <span class="icon icon-github"></span>
            </a>
          </li>
        </ul>
        <!-- #MENU -->
      </div>
    </div>
    <!-- #CONTAINER -->
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  letter-spacing: $lts-wide;
  background: rgba(#121829, 0.8);

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    @media (--sm-viewport) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    list-style-type: none;

    @media (--sm-viewport) {
      gap: 1rem;
      justify-content: space-evenly;
    }
  }

  &__item {
    > a {
      padding: 0.75rem 1rem;
      color: $text-color-secondary;
      font-weight: 600;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: all ease 0.15s;

      &:hover {
        background-color: rgba($background-primary, 0.5);
      }
    }
  }
}

// Router Link active style
.router-link-exact-active {
  color: $text-color-warning !important;
  background-color: rgba($background-primary, 0.5);
  cursor: default;
}

// Make icon larger
.icon {
  --icon-size: 1.5rem;
}
</style>
