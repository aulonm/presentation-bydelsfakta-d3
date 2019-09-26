<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section data-notes="test">
          <h2>Single Horizontal Slide</h2>
          <aside class="notes">Dette er en test slide</aside>
        </section>
        <section>
          <section>Vertical Slide 1</section>
          <section>Vertical Slide 2</section>
        </section>
        <page-5></page-5>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js';
import Page5 from './views/page5.vue';

export default {
  name: 'app',
  components: { Page5 },
  mounted() {
    Reveal.initialize();
  },
};
</script>

<style lang="scss">
@import url('../node_modules/reveal.js/css/reveal.css');
@import url('../node_modules/reveal.js/css/theme/black.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
