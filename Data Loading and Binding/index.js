// javascript
var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter() // will take elements one by one and perform operation on them
    .append('p') // appends paragraph for each data element
    //.text('D3 is awesome!!');-->O/P:  D3 is awesome!! D3 is awesome!! D3 is awesome!! D3 is awesome!! D3 is awesome!!
    .text(function(d) { return d; });//-->O/P: 1 2 3 4 5
