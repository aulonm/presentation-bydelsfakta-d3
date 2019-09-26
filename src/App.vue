<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section data-background-color="#2A2859">
          <img src="/img/agenda.png" height="100%" width="100%" />
        </section>
        <who></who>
        <what></what>
        <page-5></page-5>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js';
import Page5 from './views/page5.vue';
import Who from './views/Who.vue';
import What from './views/What.vue';

export default {
  name: 'app',
  components: { Page5, Who, What },
  mounted() {
    Reveal.initialize({});
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
  color: #2a2859;
  height: 100vh;
}
</style>
