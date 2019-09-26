<template>
  <section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/7.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#ffffff">
      <img class="black" :src="getUrl('/img/7-1.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#ffffff">
      <img class="black" :src="getUrl('/img/7-2.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#131416">
      <img :src="getUrl('/img/7-3.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#ffffff">
      <img class="black" :src="getUrl('/img/7-4.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/7-5.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/7-6.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/7-7.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
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

<style scoped>
.black {
  border: 4px black solid;
}
</style>
