<template>
  <section data-state="stats">
    <svg ref="svg"></svg>
  </section>
</template>

<script>
import Reveal from 'reveal.js/js/reveal';
import * as d3 from 'd3';

export default {
  name: 'Graph',
  data: () => ({
    svg: false,
    current: null,
  }),
  mounted() {
    this.draw();
    Reveal.addEventListener('stats', () => this.eventListener());
  },
  methods: {
    draw() {
      d3.selectAll('svg')
        .transition()
        .style('background-color', 'white')
        .attr('height', 500)
        .attr('width', 500);
    },
    steps(index) {
      switch (index) {
        case 1:
          this.step1();
          break;
        case 2:
          this.step2();
          break;
        default:
          break;
      }
    },
    step1() {
      d3.selectAll('svg')
        .transition()
        .style('background-color', 'blue');
    },
    step2() {
      d3.selectAll('svg')
        .transition()
        .attr('width', 1000)
        .attr('height', 1000);
    },
    handleKeyboard(index) {
      console.log('hello');
      if (index === this.current) {
        index += 1;
        this.current = index;
        this.steps(this.current);
      }
    },
    eventListener() {
      console.log('test');
      Reveal.addKeyBinding({ keyCode: 32, key: 'Space', description: 'svg next' }, () =>
        this.handleKeyboard(this.current)
      );
    },
  },
};
</script>

<style scoped></style>
