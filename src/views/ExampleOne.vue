<template>
  <section data-state="stats">
    <h6>select/selectAll/node/append/text</h6>
    <div class="container" id="container">
      <div class="col">
        <vue-code-highlight>{{ code }}</vue-code-highlight>
      </div>
      <div class="col" id="div"></div>
    </div>
  </section>
</template>

<script>
import Reveal from 'reveal.js/js/reveal';
import * as d3 from 'd3';
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
  name: 'ExampleOne',
  data: () => ({
    svg: false,
    current: null,
    code: null,
  }),
  components: {
    VueCodeHighlight,
  },
  mounted() {
    Reveal.addEventListener('stats', () => this.eventListener());
  },
  methods: {
    draw() {
      // hvis vi kjører bare select så får vi en seleciton av diven
      this.code = "d3.select('#div');";
      this.div = d3.select('#div');
      this.removeHighlightCode();
      this.addHighlightCode('Selection {_groups: Array(1), _parents: Array(1)}');
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
        default:
          break;
      }
    },
    step1() {
      // kaller du node metoden så får du selve html koden
      this.removeHighlightCode();
      this.code = "d3.select('#div').node()";
      this.addHighlightCode('<div data-v-0d813084="" id="div" class="col">\n' + '</div>');
    },
    step2() {
      // ved å kjøre en append, så kan du legge til andre elementer inne i diven, her en p-element
      this.removeHighlightCode();
      const div = d3.select('#div');
      this.code = "d3.select('#div')\n" + "        .append('p')\n" + "        .text('new paragraph');";
      div
        .append('p')
        .transition()
        .text('new paragraph');
    },
    step3() {
      // kan legge til flere p'er
      this.removeHighlightCode();
      const div = d3.select('#div');
      this.code =
        '      ' +
        "        div.append('p').text('new paragraph');\n" +
        'div' +
        ".append('p').text('new paragraph');\n" +
        'div' +
        ".append('p').text('new paragraph');";
      div
        .append('p')
        .transition()
        .text('new paragraph');
      div
        .append('p')
        .transition()
        .text('new paragraph');
    },
    step4() {
      // fjern alle p'ene
      this.code = "d3.selectAll('p').remove();";
    },
    step5() {
      // faktisk fjerning
      d3.selectAll('p').remove();
    },
    step6() {
      // bruk data for å legge til flere p'er
      this.code =
        "const data = ['Praha', '2019'];\n" +
        "const div = d3.select('#div');\n" +
        'div\n' +
        "    .selectAll('p')\n" +
        '    .data(data)\n' +
        "    .join('p')\n" +
        '    .text(d => d);';
    },
    step7() {
      // faktisk legg til alle p'ene
      const data = ['Praha', '2019'];
      const div = d3.select('#div');
      div
        .selectAll('p')
        .data(data)
        .join('p')
        .text(d => d);
    },
    addHighlightCode(code) {
      const pre = d3
        .select('#div')
        .append('pre')
        .attr('id', 'highlight')
        .attr('class', 'language-javascript');
      pre.append('code').text(() => code);
    },
    removeHighlightCode() {
      d3.select('#highlight').remove();
    },
    nextStep(index) {
      if (index === this.current) {
        index += 1;
        this.current = index;
        this.steps(this.current);
      }
    },
    prevStep(index) {
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
      d3.select('#div').remove();
      d3.select('#container')
        .append('div')
        .attr('class', 'col')
        .attr('id', 'div');
      this.draw();
      Reveal.addKeyBinding({ keyCode: 77, key: 'Space', description: 'svg next' }, () => this.nextStep(this.current));
      Reveal.addKeyBinding({ keyCode: 78, key: 'KeyM', description: 'svg prev' }, () => this.prevStep(this.current));
    },
  },
  destroyed() {
    console.log('eventlistener');
    this.removeListeners();
  },
};
</script>

<style lang="scss"></style>
