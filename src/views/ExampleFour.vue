<template>
  <section data-state="stats4">
    <h6>Example: Boligpriser</h6>
    <div class="container" id="container4">
      <div class="col">
        <vue-code-highlight>{{ code }}</vue-code-highlight>
      </div>
      <div class="col" id="div4"></div>
    </div>
  </section>
</template>

<script>
import Reveal from 'reveal.js/js/reveal';
import * as d3 from 'd3';
import { component as VueCodeHighlight } from 'vue-code-highlight';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../util/tooltip';
import boligpriser from '../util/boligpriser';

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
    Reveal.addEventListener('stats4', () => this.eventListener());
  },
  methods: {
    init() {
      if (d3.select('svg').node()) d3.select('svg').remove();
      this.svg = d3
        .select('#div4')
        .append('svg')
        .attr('width', 500)
        .attr('height', this.data.length * 20 + 40)
        .style('background-color', 'white');
      d3.select('svg')
        .selectAll('rect')
        .data(this.data)
        .join('rect')
        .transition()
        .attr('width', d => d * 2)
        .attr('height', 10)
        .attr('x', 10)
        .attr('y', (d, i) => i * 20 + 10);
    },
    draw() {
      this.code = boligpriser;
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
        case 11:
          this.step11();
          break;
        case 12:
          this.step12();
          break;
        case 13:
          this.step13();
          break;
        case 14:
          this.step14();
          break;
        default:
          break;
      }
    },

    step1() {
      this.svg = d3
        .select('svg')
        .transition()
        .attr('width', 500)
        .attr('height', 500)
        .style('background-color', 'white');
    },
    step2() {
      this.rect = d3
        .select('svg')
        .selectAll('rect')
        .data(boligpriser)
        .join('rect');
    },
    step3() {
      this.rect.transition().attr('width', d => d.value / 300);
    },
    step4() {
      this.rect.transition().attr('height', 20);
    },
    step5() {
      this.rect.transition().attr('x', 150);
    },
    step6() {
      this.rect.transition().attr('y', (d, i) => i * 30 + 10);
    },
    step7() {
      this.text = d3
        .select('svg')
        .selectAll('text')
        .data(boligpriser)
        .join('text');
    },
    step8() {
      this.text.transition().text(d => d.geography);
    },
    step9() {
      this.text.transition().attr('y', (d, i) => i * 30 + 25);
    },
    step10() {
      this.text.transition().attr('font-size', 12);
    },
    step11() {
      this.text.transition().attr('x', 140);
    },
    step12() {
      this.text.transition().attr('text-anchor', 'end');
    },
    step13() {
      this.rect
        .on('mouseover', d => this.showTooltipOver(d.value))
        .on('mousemove', () => this.showTooltipMove(d3.event.pageX, d3.event.pageY))
        .on('mouseleave', this.hideTooltip);
    },

    addHighlightCode(code) {
      this.removeHighlightCode();
      const pre = d3
        .select('#div4')
        .append('pre')
        .attr('id', 'highlight4')
        .attr('class', 'language-javascript');
      pre.append('code').text(() => code);
    },

    hideTooltip() {
      d3.select('body')
        .select('div.tooltip')
        .remove();
    },

    showTooltipOver(str, delay) {
      const tooltip = d3
        .select('body')
        .append('div')
        .attr('class', 'tooltip')
        .html(str)
        .style('top', '-30px')
        .style('left', '-35px');

      setTimeout(() => {
        tooltip.classed('showTooltip', true);
      }, delay);
    },

    showTooltipMove(x, y) {
      d3.select('body')
        .select('div.tooltip')
        .style('transform', `translate(${x}px, ${y}px)`);
    },

    removeHighlightCode() {
      d3.select('#highlight4').remove();
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
      d3.select('#div4').remove();
      d3.select('#container4')
        .append('div')
        .attr('class', 'col')
        .attr('id', 'div4');
      this.draw();
      Reveal.addKeyBinding({ keyCode: 77, key: 'Space', description: 'svg next' }, () => this.nextStep(this.current));
      Reveal.addKeyBinding({ keyCode: 78, key: 'KeyM', description: 'svg prev' }, () => this.prevStep(this.current));
    },
  },
};
</script>

<style lang="scss" scoped></style>
