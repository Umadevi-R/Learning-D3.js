// javascript
d3.select();
d3.selectAll();

d3.select('h1').style('color', 'red')//selecting the h1 tag and styling it
.attr('class', 'heading') //adding a class attribue
.text('Updated h1 tag');// changing the text of h1 tag

d3.select('body').append('p').text('First Paragraph'); // appending elements to the dom
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue'); // using selectAll to select more than one element
