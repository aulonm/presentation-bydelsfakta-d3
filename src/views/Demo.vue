<template>
  <section data-background-color="#2A2859" data-background-transition="none">
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8-1.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8-2.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8-3.png')" height="100%" width="100%" />
    </section>
    <section data-background-iframe="http://localhost:8081" data-background-interactive="">
      <aside class="notes">
        <p>Hvilken delbydel i Bydel Søndre Nordstrand har størst befolkning i pensjonistalderen (67+ år)</p>
      </aside>
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8-7.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8-8.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/8-9.png')" height="100%" width="100%" />
    </section>
    <section data-background-iframe="http://localhost:8081">
      <aside class="notes">
        Likheter og ulikheter i de sørøstlige bydelene når det kommer til innvandrerbefolkningen
      </aside>
    </section>
  </section>
</template>

<script>
import API from '../util/config';
export default {
  name: 'Demo',
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
  },
};
</script>

<style scoped></style>
