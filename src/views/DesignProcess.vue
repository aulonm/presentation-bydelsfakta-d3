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
