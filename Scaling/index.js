 // javascript
//var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
//The previous example had larger values but while using smaller values 
//The bars of the bar chart stick to the x-axis and hence we scale them
var dataset = [1,2,3,4,5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
//Scaling is done using the scaleLinear() function
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);
        
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - yScale(d); //instead of d use yScale(d)
    })
    .attr("height", function(d) { 
        return yScale(d); 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });
