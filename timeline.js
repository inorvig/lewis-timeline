// window.onload = function() {
// 	var chart = d3.timeline().stack();
//
// 	var data = [
// 	{label: "Life events", times: [
// 		{label: "Born", starting_time: -2243358000000, display: "circle"}
// 	]}// ,
// // 	{label: "Novels", times: [
// //
// // 	]},
// // 	{label: "Essays", times: [
// //
// // 	]}
// 	];
//
// 	var svg = d3.select("#timeline").append("svg").attr("width", 500)
//   	.datum(data).call(chart);
// }

    window.onload = function() {
      var testData = [
        {times: [{"starting_time": 1355752800000, "ending_time": 1355759900000}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
        {times: [{"starting_time": 1355759910000, "ending_time": 1355761900000}, ]},
        {times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
      ];

      var width = 500;
      function timelineRect() {
        var chart = d3.timeline();

        var svg = d3.select("#timeline1").append("svg").attr("width", width)
          .datum(testData).call(chart);
      }

      timelineRect();
    }