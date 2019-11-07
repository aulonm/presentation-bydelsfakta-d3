<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section data-background-color="#2A2859">
          <h3 style="color: #F9C66B">Bydelsfakta & Intro til D3js</h3>
          <aside class="notes">
            <p>
              Velkommen til min talk om Oslo kommune - Origo sitt Bydelsfakta prosjekt og en liten intro til hva D3js er
              med ordentlige eksempler.
            </p>
            <p>Dette er et prosjekt som skulle modernisere faktaark til Plan og Strategi.</p>
            <p>Dette er statistikk om alle delbydelene og bydelene i Oslo kommune.</p>
            <p>
              Jeg skal vise hva det er seinere i sliden, men vit at det bare er statistikk som har gått fra å være pdfer
              til og bli en hjemmesider med dynamiske grafer
            </p>
          </aside>
        </section>
        <section data-background-color="#2A2859" data-background-transition="none">
          <img :src="getUrl('/img/1.png')" height="100%" width="100%" />
          <aside class="notes">
            <p>Agendaen på hva vi skal gjennom før vi går over til D3 er følgende:</p>
            <ul>
              <li>
                Hvam som har jobbet i prosjektet
              </li>
              <li>
                Hva vi faktisk skulle gjøre i dette prosjektet
              </li>
              <li>
                Hvorfor var det nødvendig og hvorfor ville vi egentlig det
              </li>
              <li>
                Hvordan det ble gjort i løpet av et år
              </li>
              <li>Og så en liten demo med ekte eksempler</li>
            </ul>
          </aside>
        </section>
        <section data-background-color="#2A2859" data-background-transition="none">
          <div style="display: flex">
            <div style="flex: 1">
              <img src="/image.png" widht="100px"/>
            </div>
            <div style="flex: 1 1 50%">
              <ul>
                <li>Aulon Mujaj</li>
                <li>Kristiansand - Oslo i 7 år</li>
                <li>Msc: Informatikk - Sikkerhet</li>
                <li>2(3) år hos Knowit Objectnet (Oslo)</li>
                <li>Oslo kommune - VueJS/D3js</li>
              </ul>
            </div>
          </div>
        </section>
        <who></who>
        <what></what>
        <why></why>
        <design-process></design-process>
        <demo></demo>
        <d3></d3>
        <examples></examples>
        <credits></credits>
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
import D3 from './views/D3.vue';
import Credits from './views/Credits.vue';
import API from './util/config';

export default {
  name: 'app',
  components: { Who, What, Why, DesignProcess, Demo, Examples, D3, Credits },
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
