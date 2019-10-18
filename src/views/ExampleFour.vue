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
        case 15:
          this.step15();
          break;
        case 16:
          this.step16();
          break;
        case 17:
          this.step17();
          break;
        case 18:
          this.step18();
          break;
        case 19:
          this.step19();
          break;
        case 20:
          this.step20();
          break;
        case 21:
          this.step21();
          break;
        case 22:
          this.step22();
          break;
        case 23:
          this.step23();
          break;
        case 24:
          this.step24();
          break;
        case 25:
          this.step25();
          break;
        case 26:
          this.step26();
          break;
        case 27:
          this.step27();
          break;
        default:
          break;
      }
    },

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
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')";
    },
    step3() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)";
    },
    step4() {
      this.rect.transition().attr('width', d => d.value / 300);
    },
    step5() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)";
    },
    step6() {
      this.rect.transition().attr('height', 20);
    },
    step7() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);";
    },
    step8() {
      this.rect.transition().attr('x', 150);
    },
    step9() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);";
    },
    step10() {
      this.rect.transition().attr('y', (d, i) => i * 30 + 10);
    },
    step11() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);" +
        "\nd3.select('svg')\n" +
        "  .selectAll('text')\n" +
        '  .data(boligpriser)\n' +
        "  .join('text');";
    },
    step12() {
      this.text = d3
        .select('svg')
        .selectAll('text')
        .data(boligpriser)
        .join('text');
    },
    step13() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);" +
        "\nd3.select('svg')\n" +
        "  .selectAll('text')\n" +
        '  .data(boligpriser)\n' +
        "  .join('text');" +
        '\n  .text(d => d.geography)';
    },
    step14() {
      this.text.transition().text(d => d.geography);
    },
    step15() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);" +
        "\nd3.select('svg')\n" +
        "  .selectAll('text')\n" +
        '  .data(boligpriser)\n' +
        "  .join('text');" +
        '\n  .text(d => d.geography)' +
        "\n  .attr('y', (d, i) => i * 30 + 25)";
    },
    step16() {
      this.text.transition().attr('y', (d, i) => i * 30 + 25);
    },
    step17() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);" +
        "\nd3.select('svg')\n" +
        "  .selectAll('text')\n" +
        '  .data(boligpriser)\n' +
        "  .join('text');" +
        '\n  .text(d => d.geography)' +
        "\n  .attr('y', (d, i) => i * 30 + 25)" +
        "\n  .attr('font-size', 12)";
    },
    step18() {
      this.text.transition().attr('font-size', 12);
    },
    step19() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);" +
        "\nd3.select('svg')\n" +
        "  .selectAll('text')\n" +
        '  .data(boligpriser)\n' +
        "  .join('text');" +
        '\n  .text(d => d.geography)' +
        "\n  .attr('y', (d, i) => i * 30 + 25)" +
        "\n  .attr('font-size', 12)" +
        "\n  .attr('x', 140)";
    },
    step20() {
      this.text.transition().attr('x', 140);
    },
    step21() {
      this.code =
        'const boligpriser = { ... }\n' +
        'const rect =\n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect')" +
        "\n        .attr('width'), d => d.value / 300)\n        .attr('height', 20)" +
        "\n        .attr('x', 150);" +
        "\n        .attr('y', (d, i) => i * 30 + 10);" +
        "\nd3.select('svg')\n" +
        "  .selectAll('text')\n" +
        '  .data(boligpriser)\n' +
        "  .join('text');" +
        '\n  .text(d => d.geography)' +
        "\n  .attr('y', (d, i) => i * 30 + 25)" +
        "\n  .attr('font-size', 12)" +
        "\n  .attr('x', 140)" +
        "\n  .attr('text-anchor', 'end');";
    },
    step22() {
      this.text.transition().attr('text-anchor', 'end');
    },
    step23() {
      this.rect
        .on('mouseover', d => this.showTooltipOver(d.value))
        .on('mousemove', () => this.showTooltipMove(d3.event.pageX, d3.event.pageY))
        .on('mouseleave', this.hideTooltip);

      this.code =
        'const boligpriser = { ... }\n' +
        'const rect = \n' +
        "      d3.select('svg')\n" +
        "        .selectAll('rect')\n" +
        '        .data(boligpriser)\n' +
        "        .join('rect');\n" +
        "        .attr('width'), d => d.value / 300)\n" +
        "        .attr('height', 20)\n" +
        "        .attr('x', 150);\n" +
        "        .attr('y', (d, i) => i * 30 + 10);\n" +
        'rect\n' +
        "    .on('mouseover', d => \n" +
        '                     showTooltipOver(d.value))\n' +
        "    .on('mousemove', () => showTooltipMove(\n" +
        '                        d3.event.pageX, \n' +
        '                        d3.event.pageY\n' +
        '                     )\n' +
        "    .on('mouseleave', hideTooltip)";
    },

    step24() {
      this.code =
        'showTooltipOver(str, delay) {\n' +
        '  const tooltip = \n' +
        "         d3.select('body')\n" +
        "           .append('div')\n" +
        "           .attr('class', 'tooltip')\n" +
        '           .text(str);\n' +
        '\n' +
        '  setTimeout(() => {\n' +
        "    tooltip.classed('showTooltip', true);\n" +
        '  }, delay);\n' +
        '}';
    },

    step25() {
      this.code =
        '.tooltip {\n' +
        '  background: #2A2859;\n' +
        '  border: 1px solid white;\n' +
        '  border-radius: 4rem;\n' +
        '  font-size: 20px;\n' +
        '  color: white;\n' +
        '  opacity: 0;\n' +
        '  padding: 0.2rem 0.8rem;\n' +
        '  pointer-events: none;\n' +
        '  position: absolute;\n' +
        '  text-anchor: middle;\n' +
        '  transform: translate(0, 14);\n' +
        '  transition: opacity 0.1s;\n' +
        '  z-index: 10;\n' +
        '  top: -30px;\n' +
        '  left: -35px;\n' +
        '}\n' +
        '\n' +
        '.showTooltip {\n' +
        '  opacity: 1;\n' +
        '  transition-duration: 0.3s;\n' +
        '}\n';
    },

    step26() {
      this.code =
        'showTooltipMove(x, y) {\n' +
        "  d3.select('body')\n" +
        "    .select('div.tooltip')\n" +
        "    .style('transform', `translate(${x}px, ${y}px)`);\n" +
        '},';
    },

    step27() {
      this.code =
        'hideTooltip() {\n' + "  d3.select('body')\n" + "    .select('div.tooltip')\n" + '    .remove();\n' + '},';
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
        .text(str);

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
