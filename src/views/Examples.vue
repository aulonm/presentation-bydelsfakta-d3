<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <example-one></example-one>
        <example-two></example-two>
        <example-three></example-three>
      </section>
    </div>
  </div>
</template>

<script>
import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';
import ExampleThree from './ExampleThree';

export default {
  name: 'Examples',
  components: {
    ExampleOne,
    ExampleTwo,
    ExampleThree,
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
