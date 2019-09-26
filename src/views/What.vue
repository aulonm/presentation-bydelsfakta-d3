<template>
  <section data-background-color="#2A2859">
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-topics.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-2.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-3.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-4.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-5.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-6.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859">
      <img :src="getUrl('/img/hva-7.png')" height="100%" width="100%" />
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
