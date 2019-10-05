/**
 * Each graph template inherits properties and methods from this Base Template.
 * Once a template object is created the init() is called which clears the
 * provided SVG node and creates new DOM elements (mainly empty 'g's) inside of it.
 * At the end of init() the created() method is called. The template in question
 * may have needs of its own to create DOM elements inside the SVG at creation for
 * its own convenience, which would be inserted into this method if needed.
 *
 * Each template defines its own render() method which is called each time
 * new data is passed down from Vue, on resize (see below) or the template
 * itself requests a new render (typically on user interaction)
 *
 * Each template shares a lot of code to be run on each render() and thus the
 * commonRender() method exists in this Base Template.
 *
 * Vue listens for changes in size for the SVG's container. The resize()
 * method uses debounce to prevent the render() method to be 'smashed'.
 *
 * Number and time formats are defined in the locale.js file imported here
 * and is used by d3 globally.
 *
 */

import * as d3 from 'd3';
import * as locale from './locale';

d3.timeFormatDefaultLocale(locale.timeFormat);

function Base_Template(svg) {
  // Declaring local variables here to prevent templates to be
  // unnecessary cluttered with commonly used variables.
  this.data = {};
  this.height = 0;
  this.width = 0;
  this.padding = { top: 30, right: 40, bottom: 40, left: 120 };
  this.height2 = 0;
  this.yGutter = 0;
  this.x = d3.scaleLinear();
  this.y = d3.scaleBand();
  this.max = 0;
  this.min = 0;
  this.rowHeight = 31;
  this.barHeight = 18;
  this.tabWidth = 120;
  this.tabGap = 10;
  this.strokeWidth = 1.5;
  this.strokeWidthHighlight = 6;
  this.parseDate = d3.timeParse('%Y-%m-%d');
  this.parseYear = d3.timeParse('%Y');
  this.formatYear = d3.timeFormat('%Y');
  this.formatPercent = locale.norwegianLocale.format('.2~p'); // 0.0124 -> '12,4%'
  this.formatDecimal = locale.norwegianLocale.format(',.0f');
  this.formatChange = locale.norwegianLocale.format('+,');
  this.formatChangePercent = locale.norwegianLocale.format('+,.3p');
  this.sourceHeight = 30;
  this.duration = 250;
  this.table = d3.select(svg.parentNode.parentNode).select('table');

  this.format = function(num, method, tick = false) {
    if (method === undefined) throw 'Cannot format number';
    if (num === undefined) throw 'Missing number';

    if (num === 'N/A' || num === 'I/T' || num === 'Ikke tilgjengelig') {
      return '–';
    }

    if (tick) {
      return d3.format('~d')(num);
    }

    switch (method) {
      case 'value':
        return this.formatDecimal(num);
      default:
        return this.formatDecimal(num);
    }
  };

  // Common operations to be run once a template is initialized
  this.init = function() {
    this.svg = d3.select(svg).style('font-family', 'OsloSans');

    this.svg.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink').attr('xmlns', 'http://www.w3.org/2000/svg');

    // Clear the contents of the svg
    this.svg.selectAll('*').remove();

    // Remove dropdown element
    d3.select(svg.parentNode.parentNode)
      .select('.graph__dropdown')
      .remove();

    this.background = this.svg
      .append('rect')
      .attr('class', 'background')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'white');

    // Append canvas element
    this.canvas = this.svg
      .append('g')
      .attr('class', 'canvas')
      .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    // Append common axis elements
    this.xAxis = this.canvas.append('g').attr('class', 'axis x');
    this.yAxis = this.canvas.append('g').attr('class', 'axis y');
    this.x2Axis = this.canvas.append('g').attr('class', 'axis x2');
    this.y2Axis = this.canvas.append('g').attr('class', 'axis y2');

    // The various templates have different needs for elements to be
    // appended to the svg after initialization. This method is run
    // once for each initialization.
    this.created();
  };

  // The parent container width is needed for each render of a template.
  this.parentWidth = function() {
    return 1500;
  };

  // Placeholder for operations to be run once a child template is initialized
  this.created = function() {};

  // All templates share these common operations when rendered
  this.commonRender = function(data, options = {}) {
    if (data === undefined || data.data === undefined) return;
    this.data = data;

    this.mode = options.mode || 'osloRatio';
    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);
    this.method = options.method || 'value';
    this.highlight = options.highlight === undefined || options.highlight === null ? -1 : options.highlight;
    this.series = options.series || 0;
    this.selected = options.selected === undefined || options.selected === null ? -1 : options.selected;

    this.width = this.parentWidth() - this.padding.left - this.padding.right;
    this.height = Array.isArray(this.data.data) ? this.data.data.length * this.rowHeight : 500;

    return true;
  };

  // Placeholder for the render method
  this.render = function() {};
}

export default Base_Template;
