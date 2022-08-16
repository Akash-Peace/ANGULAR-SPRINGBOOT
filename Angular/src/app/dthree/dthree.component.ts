import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dthree',
  templateUrl: './dthree.component.html',
  styleUrls: ['./dthree.component.css']
})
export class DthreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.createSvg();
  this.drawBars(this.data);
  }
  dataa(){
    this.data = [
      {"Framework": "Vue", "Stars": "66443", "Released": "2014"},
      {"Framework": "React", "Stars": "750793", "Released": "2013"},
      {"Framework": "Angular", "Stars": "362342", "Released": "2016"},
      {"Framework": "Backbone", "Stars": "127647", "Released": "2010"},
      {"Framework": "Ember", "Stars": "1471", "Released": "2011"}
  ];
  this.drawBars(this.data);
  }
  datab(){
    this.data = [
      {"Framework": "Vue", "Stars": "622443", "Released": "2014"},
      {"Framework": "React", "Stars": "250793", "Released": "2013"},
      {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
      {"Framework": "Backbone", "Stars": "627647", "Released": "2010"},
      {"Framework": "Ember", "Stars": "221471", "Released": "2011"}
  ];
  this.drawBars(this.data);
  }
  private svg:any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  data: any = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"}
];
  createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
drawBars(data: any[]): void {
  // Create the X-axis band scale
  if(this.svg !== undefined){
    this.svg.exit().remove()
  }
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Framework))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-15)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 200000])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d:any) => x(d.Framework))
  .attr("y", (d:any) => y(d.Stars))
  .attr("width", x.bandwidth())
  .attr("height", (d:any) => this.height - y(d.Stars))
  .attr("fill", "#d04a35");
  }
}