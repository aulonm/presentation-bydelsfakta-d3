import * as d3 from 'd3';

export const showTooltipOver = (str, delay) => {
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
};

export const showTooltipMove = (x, y) => {
  d3.select('body')
    .select('div.tooltip')
    .style('transform', `translate(${x}px, ${y}px)`);
};

export const hideTooltip = () => {
  d3.select('body')
    .select('div.tooltip')
    .remove();
};
