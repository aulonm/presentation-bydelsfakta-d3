<template>
  <section data-background-transition="none">
    <section data-background-color="#2A2859" data-transition="none" data-background-transition="none">
      <img :src="getUrl('/img/7.png')" height="100%" width="100%" />
      <aside class="notes">
        <p>Nøkkeloppgavene til oss med nye løsningen ble til slutt 4 punkter</p>
        <ul>
          <li>
            se historikk og trender
          </li>
          <li>presentere datagrafikk</li>
          <li>laste ned rådata</li>
          <li>filtrere og sortere</li>
        </ul>
      </aside>
    </section>
    <section data-background-color="#ffffff" data-transition="none" data-background-transition="none">
      <img class="black" :src="getUrl('/img/7-1.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#ffffff" data-transition="none" data-background-transition="none">
      <img class="black" :src="getUrl('/img/7-2.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#131416" data-transition="none" data-background-transition="none">
      <img :src="getUrl('/img/7-3.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#ffffff" data-transition="none" data-background-transition="none">
      <img class="black" :src="getUrl('/img/7-4.png')" height="100%" width="100%" />
      <aside class="notes">
        <p>
          Var mye fram og tilbake på hva slags løsning vi ville ha. Om vi ville finne hyllevare som tablau som får inn
          masse data og lager grafer automatisk eller om vi ville gjøre alt fra bunnen av selv.
        </p>
        <p>
          Siden løsningen vår er veldig spesill og mange av grafene ikke er vanlig å lage, så endte vi opp med å gjøre
          det selv.
        </p>
        <p>
          Vuejs er frontend rammeverket vårt, d3 er grafbiblioteket og leaflet er kartløsningen, så har frontenden vår
          en liten backend i node med express for å proxye kall fra frontend til dataplattform med autentisering.
        </p>
        <p>
          Vi så på materialdesign bibliotek, vuetify og bulma og mapbox for kart, men ville heller skrive alt selv da
          det ikke var største prosjektet.
        </p>
      </aside>
    </section>
    <section data-background-color="#2A2859" data-transition="none" data-background-transition="none">
      <img :src="getUrl('/img/7-5.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none" data-background-transition="none">
      <img :src="getUrl('/img/7-6.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none" data-background-transition="none">
      <img :src="getUrl('/img/7-7.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none" data-background-transition="none">
      <img :src="getUrl('/img/7-8.png')" height="100%" width="100%" />
    </section>
  </section>
</template>

<script>
import API from '../util/config';
export default {
  name: 'DesignProcess',
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
  },
};
</script>

<style scoped></style>
