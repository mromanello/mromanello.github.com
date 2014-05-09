var w = 1000,
    h = 900,
    fill = d3.scale.category20();

var vis = d3.select("#chart").append("svg")
    .attr("width", w)
    .attr("height", h);

d3.json("micro.json", function(json) {
  var color = d3.scale.category20();
  var force = d3.layout.force()
      .charge(-10)
      .linkDistance(5)
      .nodes(json.nodes)
      .links(json.links)
      .size([w, h])
      .start();

  var link = vis.selectAll("line.link")
      .data(json.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); })
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  var node = vis.selectAll("circle")
      .data(json.nodes)
    .enter().append("svg:circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", 3)
      .style("fill", function(d) { return color(d.type); })

      .call(force.drag);
      
      node.on("click", function(d) {
    	alert(d.name);
  }); 

node.append("title")
    .text(function(d) { return d.name; });

     
var text = vis.append("svg:g").selectAll("g")
    .data(force.nodes())
  .enter().append("svg:g");
/*
text.append("svg:text")
    .attr("x", 8)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });
*/

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    
     text.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
  });
});