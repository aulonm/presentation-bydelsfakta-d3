/**
 * Template for bar chart which supports both single or multiple series.
 */

import Base_Template from './baseTemplate';
import { color } from './colors';
import * as d3 from 'd3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 100, left: 190, right: 25, bottom: 30 };
  this.gutter = 30;
  this.x2 = d3.scaleLinear();
  this.x = [];
  this.filteredData = {};
  this.template = 'a';

  this.render = function(data, options = {}) {
    this.selected = options.selected !== undefined ? options.selected : -1;

    if (data.data && data.data[0].values && data.data[0].values.length === 1 && data.meta.series.length > 1) {
      data.meta.series = [data.meta.series[0]];
    }

    // Multiseries need larger padding top to make room for tabs,
    // mobile views have smaller padding.left
    this.padding.top = 40;
    this.padding.left = 190;
    this.padding.bottom = 30;

    // Temp fix until meta data is included in data from API
    if (!data.meta.series || !data.meta.series.length) data.meta.series.push('');

    if (!this.commonRender(data, options)) return;

    this.padding.right = 25;
    this.gutter = 0;

    // Make a filtered copy of the provided data object containing
    // to house only the selected series (if one has been selected)
    this.filteredData = JSON.parse(JSON.stringify(this.data));

    if (this.selected > -1) {
      this.filteredData.meta.series = [this.data.meta.series[this.selected]];
      this.filteredData.data = this.filteredData.data.map(district => {
        district.values = [district.values[this.selected]];
        return district;
      });
    }

    this.svg
      .transition()
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    // Move the close button
    this.canvas
      .select('g.close')
      .style('display', () => (this.selected > -1 ? 'block' : 'none'))
      .attr('transform', `translate(${this.width - 30}, -60)`)
      .attr('tabindex', this.selected === -1 ? false : 0);

    this.setScales();
    this.drawColumns();
    this.drawRows();
    this.drawAxis();
  };

  this.created = function() {
    this.canvas.append('g').attr('class', 'columns');
    this.canvas.append('g').attr('class', 'rows');

    // Create and initialise the close button
    const close = this.canvas
      .append('g')
      .attr('class', 'close')
      .style('display', 'none')
      .on('click keyup', () => {
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        this.render(this.data, { method: this.method });
      });

    // Close button background
    close
      .append('rect')
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', color.red)
      .style('cursor', 'pointer')
      .attr('opacity', 0.7)
      .on('mouseenter', function() {
        d3.select(this)
          .transition()
          .duration(this.duration)
          .attr('opacity', 1);
      })
      .on('mouseleave', function() {
        d3.select(this)
          .transition()
          .duration(this.duration)
          .attr('opacity', 0.7);
      });

    // Close button icon
    close
      .append('text')
      .attr('fill', color.purple)
      .style('pointer-events', 'none')
      .text('x')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr('text-anchor', 'middle')
      .attr('transform', 'translate(15, 20)');
  };

  /**
   * @param  {element} rowsE - The newly created rows
   *
   * Creates all the DOM elements inside of each row
   */
  this.initRowElements = function(el) {
    const g = el.append('g').attr('class', 'row');

    // Row fill
    g.insert('rect')
      .attr('class', 'rowFill')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left);

    // Row divider
    g.insert('rect')
      .attr('class', 'divider')
      .attr('fill', color.purple)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    // Text element
    g.append('text')
      .attr('class', 'geography')
      .attr('fill', color.purple)
      .attr('y', this.rowHeight / 2 + 6);

    g.append('g').attr('class', 'bars');

    g.append('text')
      .attr('class', 'valueText')
      .attr('fill', color.purple);

    return g;
  };

  /**
   * Updates elements on each row
   */
  this.drawRows = function() {
    // Select all existing rows (DOM elements) that matches the data
    const rows = this.canvas
      .select('g.rows')
      .selectAll('g.row')
      .data(this.filteredData.data, d => d.geography)
      .join(
        enter => {
          const el = this.initRowElements(enter);
          el.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
          return el;
        },
        update => update.transition().attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`)
      )
      .attr('class', 'row')
      .attr('data-avgRow', d => d.avgRow)
      .attr('data-totalRow', d => d.totalRow);

    // Dynamic styling, sizing and positioning based on data and container size
    rows
      .select('rect.rowFill')
      .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0 : 0))
      .attr('width', this.padding.left + this.width + this.padding.right);
    rows
      .select('rect.divider')
      .attr('fill-opacity', d => {
        if (this.data.meta.series.length === 1) return 0;
        return d.avgRow || d.totalRow ? 0.5 : 0.2;
      })
      .attr('width', this.padding.left + this.width + this.padding.right);

    rows
      .selectAll('text.valueText')
      .data(d => d.values)
      .join('text')
      .attr('class', 'valueText')
      .attr('fill', color.purple)
      .attr('y', this.rowHeight / 2 + 4)
      .attr('x', (d, i) => this.x[i](0))
      .text(d => (d[this.method] ? this.format(d[this.method], this.method) : 'Ikke tilgjengelig'))
      .attr('opacity', (d, i, j) => {
        const parent = d3.select(j[i].parentNode);
        const avgOrTotal = JSON.parse(parent.attr('data-avgRow')) || JSON.parse(parent.attr('data-totalRow'));
        return avgOrTotal && this.method === 'value' && d.value > this.x[i].domain()[1] ? 1 : 0;
      });

    rows
      .select('text.geography')
      .text(d => {
        return d.geography;
      })
      .attr('x', () => {
        return this.data.meta.series.length > 1 ? -this.padding.left + 10 : -10;
      })
      .attr('y', () => this.rowHeight / 2 + 4)
      .attr('text-anchor', () => {
        return 'end';
      })
      .style('cursor', 'pointer')
      .style('text-decoration', false);

    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));

    rows
      .select('text.geography')
      .append('title')
      .html(d => d.geography);

    // Add attributes to total and avg rows
    rows.attr('fill', d => (d.avgRow ? color.yellow : d.totalRow ? color.purple : color.purple));

    const bars = rows
      .selectAll('rect.bar')
      .data(d => d.values)
      .join('rect')
      .attr('class', 'bar');

    bars
      .attr('height', (d, i, j) => {
        return j[0].parentNode.__data__.totalRow ? 2 : this.barHeight;
      })
      .attr('y', (d, i, j) => {
        return j[0].parentNode.__data__.totalRow ? this.rowHeight / 2 : (this.rowHeight - this.barHeight) / 2;
      })
      .attr('opacity', (d, i) =>
        i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
      )
      .transition()
      .duration(this.duration)
      .attr('width', () => {
        return 0;
      })
      .attr('x', (d, i) => this.x[i](0));
  };

  this.setScales = function() {
    if (!this.filteredData.meta.series || !this.filteredData.meta.series.length) return;
    const maxValues = this.filteredData.meta.series.map((row, i) => {
      return d3.max(
        this.filteredData.data
          .filter(d => !(this.method === 'value' && (d.totalRow || d.avgRow)))
          .map(d => {
            if (!d.values || !d.values[i] || !d.values[i][this.method]) return 0;
            return d.values[i][this.method];
          })
      );
    });

    this.x2 = d3
      .scaleLinear()
      .range([0, this.width - (this.gutter * this.filteredData.meta.series.length - 1)])
      .domain([0, d3.sum(maxValues)]);

    this.x = this.filteredData.meta.series.map((series, index) => {
      const SCALE = d3.scaleLinear();
      let startPos = 0;
      for (let i = 0; i < index; i++) {
        startPos += this.x2(maxValues[i]);
        startPos += this.gutter;
      }
      const endPos = startPos + this.x2(maxValues[index]);
      SCALE.domain([0, maxValues[index]])
        .range([startPos, endPos])
        .nice();

      return SCALE;
    });

    this.x2.domain(this.filteredData.meta.series.map((d, i) => i)).range([0, this.width]);
  };

  this.drawAxis = function() {
    this.xAxis = this.canvas
      .selectAll('g.axis.x')
      .data(this.x)
      .join('g')
      .attr('class', 'axis x');

    this.xAxis.each((d, i, j) => {
      d3.select(j[i])
        .attr('opacity', () => {
          return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
        })
        .transition()
        .duration(this.duration)
        .attr('transform', `translate(0, ${this.height + 10})`)
        .call(
          d3
            .axisBottom(this.x[i])
            .ticks((this.x[i].range()[1] - this.x[i].range()[0]) / 60)
            .tickFormat(d => this.format(d, this.method, true))
        );
    });
  };

  this.drawColumns = function() {
    const columns = this.canvas
      .select('g.columns')
      .selectAll('g.column')
      .data(this.filteredData.meta.series, d => d.heading + d.subheading)
      .join(enter => {
        const g = enter.append('g').attr('class', 'column');

        g.append('rect')
          .attr('fill', color.light_grey)
          .attr('class', 'colFill');

        g.append('rect')
          .attr('fill', color.light_grey)
          .attr('class', 'clickTrigger');

        g.append('rect')
          .attr('class', 'arrow')
          .attr('width', 1)
          .attr('height', 11);
        g.append('text')
          .attr('class', 'colHeading')
          .attr('transform', 'translate(0, -40)')
          .style('pointer-events', 'none');
        g.append('text')
          .attr('class', 'colSubheading')
          .attr('transform', 'translate(0, -20)')
          .style('pointer-events', 'none');
        return g;
      });

    columns
      .transition()
      .duration(this.duration)
      .attr('transform', (d, i) => `translate(${this.x[i](0)},0)`);

    columns
      .select('rect.clickTrigger')
      .style('cursor', () => 'default')
      .attr('width', () => {
        return 0;
      })
      .attr('height', this.padding.top)
      .attr('transform', `translate(0, -60)`)
      .attr('fill', 'black')
      .attr('opacity', 0)
      .on('mouseover', (d, i) => {
        this.render(this.data, { highlight: i, selected: this.selected, method: this.method });
      })
      .on('mouseleave', () => {
        this.render(this.data, { highlight: -1, selected: this.selected, method: this.method });
      })
      .on('click keyup', (d, i) => {
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        if (this.data.meta.series.length === 1) return;
        const target = this.selected > -1 ? -1 : i;

        this.render(this.data, { selected: target, method: this.method });
      })
      .attr('tabindex', false)
      .append('title')
      .html(d => d.heading + ' ' + d.subheading);

    columns
      .select('rect.colFill')
      .attr('y', -10)
      .transition()
      .duration(this.duration)
      .attr('height', this.height + 20)
      .duration(this.duration)
      .attr('width', (d, i) => {
        let val;
        const totalRow = this.filteredData.data.find(d => d.totalRow);

        if (totalRow && totalRow.values && totalRow.values[i]) {
          val = totalRow.values[i][this.method];
        } else {
          return;
        }

        if ((this.method === 'value' && val > this.x[i].domain()[1]) || this.isMobileView) {
          return 0;
        } else if (this.filteredData.data.filter(d => d.totalRow).length) {
          return this.x[0](val);
        } else {
          return 0;
        }
      });

    columns
      .select('rect.arrow')
      .attr('transform', `translate(0, ${this.rowHeight / 2 - 5})`)
      .transition()
      .duration(this.duration)
      .attr('y', () => this.filteredData.data.findIndex(d => d.totalRow) * this.rowHeight)
      .attr('x', (d, i) => {
        let val;
        const totalRow = this.filteredData.data.find(d => d.totalRow);

        if (totalRow && totalRow.values && totalRow.values[i]) {
          val = totalRow.values[i][this.method];
        } else {
          return;
        }

        if (this.method === 'value' && val > this.x[i].domain()[1]) return 0;
        return this.x[0](val);
      })
      .attr('opacity', (d, i) => {
        let val;
        const totalRow = this.filteredData.data.find(d => d.totalRow);

        if (totalRow && totalRow.values && totalRow.values[i]) {
          val = totalRow.values[i][this.method];
        } else {
          return 0;
        }

        if (this.method === 'value' && val > this.x[i].domain()[1]) {
          return 0;
        } else {
          return 1;
        }
      });
  };

  this.init(svg);
}

export default Template;
