<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <example-one></example-one>
        <example-two></example-two>
      </section>
    </div>
  </div>
</template>

<script>
import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';

export default {
  name: 'Examples',
  components: {
    ExampleOne,
    ExampleTwo,
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
}
.col {
  flex: 1;
}
</style>
