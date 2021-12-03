import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './Chart.css'

export const Chart = ({ width = 600, height = 600, data }) => {
    const barChart = useRef()

    useEffect(() => {
        const margin = { top: 10, left: 50, bottom: 40, right: 10 }
        const iwidth = width - margin.left - margin.right
        const iheight = height - margin.top - margin.bottom

        const svg = d3.select(barChart.current)
        svg.attr('width', width)
        svg.attr('height', height)

        let g = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`)

        const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0])

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.name))
            .range([0, iwidth])
            .padding(0.1)

        // Continue with implementation. Don't forget the tooltip
        var div = d3
            .select('body')
            .append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0)

        const bars = g.selectAll('rect').data(data)

        bars.enter()
            .append('rect')
            .attr('class', 'bar')
            .style('fill', 'pink')
            .attr('x', (d) => x(d.name))
            .attr('y', (d) => y(d.stock))
            .attr('height', (d) => iheight - y(d.stock))
            .attr('width', x.bandwidth())
            .on('mouseover', (event, d) => {
                div.transition().duration(200).style('opacity', 0.9)
                div.html(d.name + ': ' + d.stock)
                    .style('left', event.pageX + 'px')
                    .style('top', event.pageY - 28 + 'px')
            })
            .on('mouseout', (event, d) =>
                div.transition().duration(500).style('opacity', 0)
            )

        g.append('g').classed('y--axis', true).call(d3.axisLeft(y))
    })

    return (
        <div id='chartArea'>
            <svg ref={barChart}></svg>
        </div>
    )
}
