<template>
  <div>
    <!-- Screen readers -->
    <a class="sr-only" href="#main">Skip to content</a>
    <div id="wrapper" class="wrapper flex flex-col relative min-h-screen">
      <HeaderPartial />
      <main id="main" class="main flex flex-1 flex-col">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";

export default {
  components: {
    HeaderPartial,
  },
};
</script>

<style>
@font-face {
  font-family: "Centra No1";
  src: url("../assets/fonts/CentraNo1-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Centra No1";
  src: url("../assets/fonts/CentraNo1-BoldItalic.woff2") format("woff2");
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Centra No1";
  src: url("../assets/fonts/CentraNo1-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Centra No1";
  src: url("../assets/fonts/CentraNo1-MediumItalic.woff2") format("woff2");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
</style>
