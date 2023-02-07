<template>
  <div class="loader">
    <div class="loader-body"></div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  background: $background-normal;
  padding: 1rem;
  border-radius: 1rem;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;

  &-body {
    animation: loader 1s linear infinite;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-shadow: 0 2.2px 0 0 #7b6ef6;
    box-sizing: content-box;
  }
}
</style>
