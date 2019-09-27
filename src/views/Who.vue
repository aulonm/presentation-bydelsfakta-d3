<template>
  <section data-background-color="#2A2859" data-transition="none">
    <img :src="getUrl('/img/2.png')" height="100%" width="100%" />
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
