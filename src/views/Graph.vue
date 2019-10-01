<template>
  <section>
    <svg ref="svg"></svg>
  </section>
</template>

<script>
import TemplateA from '../util/templateA';
import obj from '../util/boligpriser.json';
export default {
  name: 'Graph',
  data: () => ({
    svg: false,
  }),
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      this.svg = new TemplateA(this.$refs['svg']);

      this.svg.render(obj, {
        method: 'value',
        mode: 'graph',
        initialRender: true,
      });
    },
  },
};
</script>

<style scoped></style>
