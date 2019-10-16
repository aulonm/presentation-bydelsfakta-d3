<template>
  <section data-state="stats2">
    <h6>Attributes and styles</h6>
    <div class="container" id="container2">
      <div class="col">
        <vue-code-highlight>{{ code }}</vue-code-highlight>
      </div>
      <div class="col" id="div2"></div>
    </div>
  </section>
</template>

<script>
import Reveal from 'reveal.js/js/reveal';
import * as d3 from 'd3';
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
  name: 'ExampleTwo',
  data: () => ({
    svg: false,
    current: null,
    code: null,
  }),
  components: {
    VueCodeHighlight,
  },
  mounted() {
    Reveal.addEventListener('stats2', () => this.eventListener());
  },
  methods: {
    draw() {
      this.code = "d3.select('#div').append('svg');";
      if (d3.select('svg').node()) d3.select('svg').remove();
      this.div = d3.select('#div2').append('svg');
    },
    steps(index) {
      switch (index) {
        case 0:
          this.draw();
          break;
        case 1:
          this.step1();
          break;
        case 2:
          this.step2();
          break;
        case 3:
          this.step3();
          break;
        case 4:
          this.step4();
          break;
        case 5:
          this.step5();
          break;
        case 6:
          this.step6();
          break;
        default:
          break;
      }
    },
    step1() {
      this.code =
        "d3.select('#div')\n" +
        "  .append('svg')\n" +
        "  .attr('height', '50px')\n" +
        "  .attr('width', '50px')\n" +
        "  .style('background-color', 'white')";
    },
    step2() {
      this.div
        .transition()
        .attr('height', '50px')
        .attr('width', '50px')
        .style('background-color', 'white');
    },
    step3() {
      this.code =
        "d3.select('#div)\n" + "  .append('svg')\n" + "  .attr('height', '200px')\n" + "  .attr('width', '200px')";
    },
    step4() {
      this.div
        .transition()
        .attr('height', '200px')
        .attr('width', '200px')
        .style('background-color', 'white');
    },
    step5() {
      this.code = "d3.select('#div')\n" + '' + "  .append('svg')\n" + "  .style('background-color', 'blue')";
    },
    step6() {
      this.div.transition().style('background-color', 'blue');
    },
    addHighlightCode(code) {
      this.removeHighlightCode();
      const pre = d3
        .select('#div2')
        .append('pre')
        .attr('id', 'highlight2')
        .attr('class', 'language-javascript');
      pre.append('code').text(() => code);
      console.log(pre);
    },
    removeHighlightCode() {
      d3.select('#highlight2').remove();
    },
    nextStep(index) {
      if (index === this.current) {
        index += 1;
        this.current = index;
        this.steps(this.current);
      }
    },
    prevStep(index) {
      if (this.current === 0) return;
      if (index === this.current) {
        index -= 1;
        this.current = index;
        this.steps(this.current);
      }
    },
    eventListener() {
      Reveal.removeKeyBinding(77);
      Reveal.removeKeyBinding(78);
      this.current = 0;
      d3.select('#div2').remove();
      d3.select('#container2')
        .append('div')
        .attr('class', 'col')
        .attr('id', 'div2');
      this.draw();
      Reveal.addKeyBinding({ keyCode: 77, key: 'Space', description: 'svg next' }, () => this.nextStep(this.current));
      Reveal.addKeyBinding({ keyCode: 78, key: 'KeyM', description: 'svg prev' }, () => this.prevStep(this.current));
    },
  },
};
</script>

<style lang="scss"></style>
