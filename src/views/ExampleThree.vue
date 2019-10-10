<template>
  <section data-state="stats3">
    <h6>Enter - Exit</h6>
    <div class="container" id="container3">
      <div class="col">
        <vue-code-highlight>{{ code }}</vue-code-highlight>
      </div>
      <div class="col" id="div3"></div>
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
    data: [70, 150, 100, 25, 50],
  }),
  components: {
    VueCodeHighlight,
  },
  mounted() {
    Reveal.addEventListener('stats3', () => this.eventListener());
  },
  methods: {
    init() {
      if (d3.select('svg').node()) d3.select('svg').remove();
      this.svg = d3
        .select('#div3')
        .append('svg')
        .attr('width', 420)
        .attr('height', 80)
        .style('background-color', 'white');
      this.div = this.svg;
    },
    draw() {
      this.code =
        '' +
        "d3.select('#div')\n" +
        "        .append('svg')\n" +
        "        .attr('width', 420)\n" +
        "        .attr('height', 80)\n" +
        "        .style('background-color', 'white');";
      this.init();
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
        case 7:
          this.step7();
          break;
        case 8:
          this.step8();
          break;
        case 9:
          this.step9();
          break;
        case 10:
          this.step10();
          break;
        default:
          break;
      }
    },
    step1() {
      if (d3.select('svg').node()) d3.select('svg').remove();
      this.svg = d3
        .select('#div3')
        .append('svg')
        .attr('width', 420)
        .attr('height', 80)
        .style('background-color', 'white');
      this.svg
        .append('rect')
        .transition()
        .attr('x', 10)
        .attr('y', 10)
        .attr('height', 15)
        .attr('width', 100)
        .style('background-color', 'black');
      this.svg
        .append('rect')
        .transition()
        .attr('x', 10)
        .attr('y', 30)
        .attr('height', 15)
        .attr('width', 45)
        .style('background-color', 'black');
      this.svg
        .append('rect')
        .transition()
        .attr('x', 10)
        .attr('y', 50)
        .attr('height', 15)
        .attr('width', 123)
        .style('background-color', 'black');
      this.code =
        'let svg = d3\n' +
        "        .select('#div3')\n" +
        '      svg\n' +
        "        .append('rect')\n" +
        '        .transition()\n' +
        "        .attr('x', 10)\n" +
        "        .attr('y', 10)\n" +
        "        .attr('height', 15)\n" +
        "        .attr('width', 100)\n" +
        "        .style('background-color', 'black');\n" +
        '      svg\n' +
        "        .append('rect')\n" +
        '        .transition()\n' +
        "        .attr('x', 10)\n" +
        "        .attr('y', 30)\n" +
        "        .attr('height', 15)\n" +
        "        .attr('width', 45)\n" +
        "        .style('background-color', 'black');\n" +
        '      svg\n' +
        "        .append('rect')\n" +
        '        .transition()\n' +
        "        .attr('x', 10)\n" +
        "        .attr('y', 50)\n" +
        "        .attr('height', 15)\n" +
        "        .attr('width', 123)\n" +
        "        .style('background-color', 'black');";
    },
    step2() {
      this.code = 'const datapoints = [70, 150, 100, 25, 50];';

      d3.select('svg').attr('height', () => this.data.length * 20 + 10);

      /*d3.select('svg')
        .selectAll('rect')
        .data(this.data)
        .exit()
        .remove();*/

      d3.select('svg')
        .selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect');

      d3.select('svg')
        .selectAll('rect')
        .attr('x', 10)
        .attr('y', (d, i) => i * 20 + 10)
        .transition()
        .attr('height', 100)
        .style('background-color', 'black')
        .attr('height', 10)
        .attr('width', d => d * 2);
    },
    step3() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' + '      let rect = svg\n' + "        .selectAll('rect')";
    },
    step4() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n';
    },
    step5() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n' +
        '        .enter()';
      this.svg = d3.select('svg');
      console.log(this.svg.selectAll('rect'));
    },
    step6() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n' +
        '        .enter()\n' +
        "        .append('rect');";
      this.svg
        .selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('height', 100)
        .style('background-color', 'black')
        .attr('y', (d, i) => i * 20 + 10)
        .attr('height', 10)
        .attr('width', d => d * 2);
    },
    step7() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n' +
        '        .enter()\n' +
        "        .append('rect');\n" +
        '        .attr("x", 10)';
      console.log(this.rekt);
      this.svg
        .selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', 0);
    },
    step8() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n' +
        '        .enter()\n' +
        "        .append('rect');\n" +
        '        .attr("x", 10)\n' +
        '        .attr("y", (d, i) => i * 20 + 20)';
      this.rect = this.rect
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', 10)
        .style('background-color', 'black')
        .attr('y', (d, i) => i * 20 + 10)
        .attr('height', 10)
        .attr('width', d => d * 2);
    },
    step9() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n' +
        '        .enter()\n' +
        "        .append('rect');\n" +
        '        .attr("x", 10)\n' +
        '        .attr("y", (d, i) => i * 20 + 20)\n' +
        '        .attr("height", 10)';
    },
    step10() {
      this.code =
        'const datapoints = [70, 150, 100, 25, 50];\n' +
        '      let rect = svg\n' +
        "        .selectAll('rect')\n" +
        '        .data(datapoints)\n' +
        '        .enter()\n' +
        "        .append('rect');\n" +
        '        .attr("x", 10)\n' +
        '        .attr("y", (d, i) => i * 20 + 20)\n' +
        '        .attr("height", 10)\n' +
        '        .attr("width", d => d * 2)';
    },
    addHighlightCode(code) {
      this.removeHighlightCode();
      const pre = d3
        .select('#div3')
        .append('pre')
        .attr('id', 'highlight3')
        .attr('class', 'language-javascript');
      pre.append('code').text(() => code);
    },
    removeHighlightCode() {
      d3.select('#highlight3').remove();
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
      d3.select('#div3').remove();
      d3.select('#container3')
        .append('div')
        .attr('class', 'col')
        .attr('id', 'div3');
      this.draw();
      Reveal.addKeyBinding({ keyCode: 77, key: 'Space', description: 'svg next' }, () => this.nextStep(this.current));
      Reveal.addKeyBinding({ keyCode: 78, key: 'KeyM', description: 'svg prev' }, () => this.prevStep(this.current));
    },
  },
};
</script>

<style lang="scss"></style>
