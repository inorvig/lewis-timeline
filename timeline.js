var chart = d3.timeline();

var svg = d3.select("#timeline").append("svg").attr("width", 500)
  .datum(testData).call(chart);