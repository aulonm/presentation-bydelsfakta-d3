<template>
  <section data-background-color="#2A2859">
    <section data-background-color="#2A2859">
      <h3 style="color: #F9C66B">Intro to D3js</h3>
    </section>
    <section>
      <h4 style="color: #F9C66B">Data-Driven Documents - D3</h4>
      <ul>
        <li class="fragment">
          Create bespoke, interactive charts and maps on the web
        </li>
        <li class="fragment">
          Alternatives made of d3js Chart.js / Highcharts
        </li>
        <li class="fragment">
          D3 is more low level charting
        </li>
      </ul>
    </section>
    <section>
      <h5 style="color: #F9C66B">Creating a small bar chart with Charts.js or D3</h5>
      <br />
      <p>D3js you need to create a SVG:</p>
      <ul>
        <li class="fragment">
          Create SVG rect elements and join them with data
        </li>
        <li class="fragment">Position the rect elements</li>
        <li class="fragment">Size the rect elements according to the data</li>
        <li class="fragment">Add axes</li>
      </ul>
    </section>
    <section>
      <h5 style="color: #F9C66B">Creating a small bar chart with Charts.js or D3</h5>
      <p>And then you might need to:</p>
      <ul>
        <li class="fragment">Animate the bars when chart first loads</li>
        <li class="fragment">Adap the chart with the size of the container</li>
        <li class="fragment">Add a tooltip</li>
      </ul>
    </section>
    <section>
      <h4 style="color: #F9C66B">D3 examples: Layouts</h4>
      <ul>
        <li>
          <a href="https://bl.ocks.org/d3indepth/raw/2815bd8c7d0f00580a64bdea6c8513f6/" target="_blank">Tree layout</a>
        </li>
        <li>
          <a href="https://bl.ocks.org/d3indepth/raw/e3b16f8ca441adfe4ffcd2f6d7b0bba5/" target="_blank"
            >Circle packing</a
          >
        </li>
        <li>
          <a href="https://bl.ocks.org/d3indepth/raw/502c024a398dc772fe947905f217dab3/" target="_blank">Treemap</a>
        </li>
      </ul>
    </section>
    <section>
      <h4 style="color: #F9C66B">D3 examples: Transitions and other stuff</h4>
      <ul>
        <li>
          <a href="https://bl.ocks.org/d3indepth/raw/16c3036242d93526f3e18c60266b154e/" target="_blank">Transitions</a>
        </li>
        <li>
          <a href="https://bl.ocks.org/d3indepth/raw/ee5a4b110b9841cc55dbba0716343143/" target="_blank"
            >User Interactions</a
          >
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'D3',
};
</script>

<style scoped></style>
