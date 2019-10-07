<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section data-background-color="#2A2859">
          <h3 style="color: #F9C66B">Hvordan Bydelsfakta ble til & intro til d3</h3>
        </section>
        <section data-background-color="#2A2859" data-background-transition="none">
          <img :src="getUrl('/img/1.png')" height="100%" width="100%" />
        </section>
        <who></who>
        <what></what>
        <why></why>
        <design-process></design-process>
        <demo></demo>
        <examples></examples>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js';
import Who from './views/Who.vue';
import What from './views/What.vue';
import Why from './views/Why.vue';
import DesignProcess from './views/DesignProcess.vue';
import Demo from './views/Demo.vue';
import Examples from './views/Examples.vue';
import API from './util/config';

export default {
  name: 'app',
  components: { Who, What, Why, DesignProcess, Demo, Examples },
  mounted() {
    Reveal.initialize({
      viewDistance: 1,
    });
  },
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
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

.reveal section img {
  background: none;
  border: none;
  box-shadow: none;
}
</style>
