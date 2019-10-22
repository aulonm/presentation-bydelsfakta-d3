<template>
  <section data-background-color="#2A2859" data-background-transition="none">
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/hva.png')" height="100%" width="100%" />
      <aside class="notes">
        <p>
          Bydelsfakta eller faktaark som det het før er statistikk om befolkningen i Oslo delt i 15 bydeler og 95
          delbydeler. Her kan du få statistikk om befolkning, bomiljø og levekår. Faktaarkene har vært produsert av Plan
          og Strategi i Oslo kommune
        </p>
        <p>
          Før så fikk du 15 pdfer, en pdf per bydel hvor det lå infromasjon om statistikken og masse grafer som har vært
          veldig nyttig for kommuneansatte, politikere, journalister osv til å hente informasjon og bruke det i
          diskusjoner eller visninger hos andre.
        </p>
        <p>
          Hvis du ville sammenligne bydelene så måtte du ta to eller flere pdfer, printe ut og så sette arkene ved siden
          av hverandre for at du skulle vite forskjellene.
        </p>
        <p>
          Dette har vi prøvd å løse i nye produktet vårt ved å gjøre det lett tilgjengelig på webben.
        </p>
      </aside>
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3-1.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3-2.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3-3.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3-6.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3-7.png')" height="100%" width="100%" />
    </section>
  </section>
</template>

<script>
import API from '../util/config';
export default {
  name: 'What',
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
  },
};
</script>

<style scoped></style>
