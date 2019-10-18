<template>
  <section data-background-color="#2A2859" data-background-transition="none">
    <img :src="getUrl('/img/2.png')" height="100%" width="100%" />
    <aside class="notes">
      <p>Trond Johansen fra Origo var vår produkteier, tidligere NRK ansatt</p>
      <p>
        Selve frontend teamet har bare vært meg som utvikler og Jesper som UXer/Designer/D3-grafguru som jeg da har lært
        opp i frontend ila året også. Kaia var vår teamlead.
      </p>
      <p>
        På dataplattformdelen, de som prosesserte all data vi trengte i frontend har vært tre fra knowit; strekerud,
        Tord og Øyvind, mens tidligere knowit ansatt Fredrik Vraarlsen har også bidratt masse.
      </p>
      <p>
        I tillegg har vi hatt en informasjonsarkitekt og en data scientist med på teamet vårt.
      </p>
    </aside>
  </section>
</template>

<script>
import API from '../util/config';
export default {
  name: 'Who',
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
  },
};
</script>

<style scoped></style>
