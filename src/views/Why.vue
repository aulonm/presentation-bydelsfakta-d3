<template>
  <div class="slides">
    <section data-background-color="#2A2859">
      <section data-background-color="#2A2859">
        <img :src="getUrl('/img/4.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859">
        <img :src="getUrl('/img/4-1.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859">
        <img :src="getUrl('/img/4-2.png')" height="100%" width="100%" />
      </section>
    </section>
    <section data-background-color="#2A2859">
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-1.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-2.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-3.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-4.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-5.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-6.png')" height="100%" width="100%" />
      </section>
    </section>
    <section data-background-color="#2A2859">
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/6.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/6-1.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-3.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#4D4D4D" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-4.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#044B45" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-5.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#B24236" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-6.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#B18151" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-7.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-8.png')" height="100%" width="100%" />
      </section>
    </section>
  </div>
</template>

<script>
import API from '../util/config';
export default {
  name: 'Why',
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
  },
};
</script>

<style scoped></style>
