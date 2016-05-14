var chart = d3.timeline().stack();

var data = [
	{label: "Life events", times: [
		{label: "Born", starting_time: -2243358000000, display: "circle"}
	]}// ,
// 	{label: "Novels", times: [
//
// 	]},
// 	{label: "Essays", times: [
//
// 	]}
]

var svg = d3.select("#timeline").append("svg").attr("width", 500)
  .datum(data).call(chart);