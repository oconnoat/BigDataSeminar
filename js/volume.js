d3.select('#firstslot').on("mousedown", function(){
    d3.select('#firstslot').transition()
    .duration(350)
    .style("opacity","0")
    .transition()
    .duration(350)
    .delay(500)
    .style("opacity", "1")
    .style("color", "#ff0000")
    .text('Million');

    d3.select('#secondslot').transition()
    .duration(350)
    .style("opacity","0")
    .transition()
    .duration(350)
    .delay(500)
    .style("opacity", "1")
    .style("color", "#ff0000")
    .text('Billion');
});
    
