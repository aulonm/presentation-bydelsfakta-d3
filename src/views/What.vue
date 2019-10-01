<template>
  <section data-background-color="#2A2859" data-background-transition="none">
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3.png')" height="100%" width="100%" />
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
      <img :src="getUrl('/img/3-4.png')" height="100%" width="100%" />
    </section>
    <section data-background-color="#2A2859" data-transition="none">
      <img :src="getUrl('/img/3-5.png')" height="100%" width="100%" />
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
