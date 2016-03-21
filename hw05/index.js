var delegates = {"Alabama": 53, "Alaska": 20, "Arizona": 85, "Arkansas": 32, "California": 475, "Colorado": 66, "Connecticut": 70, "Delaware": 31, "Florida": 214, "Georgia": 102, "Hawaii": 34, "Idaho": 27, "Illinois": 156, "Indiana": 92, "Iowa": 44, "Kansas": 33, "Kentucky": 61, "Louisiana": 51, "Maine": 25, "Maryland": 95, "Massachusetts": 91, "Michigan": 130, "Minnesota": 77, "Mississippi": 36, "Missouri": 71, "Montana": 27, "Nebraska": 25, "Nevada": 35, "New Hampshire": 24, "New Jersey": 142, "New Mexico": 43, "New York": 291, "North Carolina": 107, "North Dakota": 23, "Ohio": 143, "Oklahoma": 38, "Oregon": 74, "Pennsylvania": 210, "Rhode Island": 24, "South Carolina": 53, "South Dakota": 25, "Tennessee": 67, "Texas": 222, "Utah": 37, "Vermont": 16, "Virginia": 95, "Washington": 118, "West Virginia": 37, "Wisconsin": 96, "Wyoming": 18};

var unallocated = ["Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "West Virginia", "Kentucky", "Oregon", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota"];

var numDelegates = d3.values(delegates);
var states = d3.keys(delegates);

var foo = d3.scale.linear()
  .domain([0, d3.max(numDelegates)])
  .range([0, 2000]);

d3.select(".chart")
  .selectAll("div")
    .data(states)
  .enter().append("div")
    .style("width", function(d) {
	console.log(delegates[d]);
        return delegates[d]*3 + "px";})
    .text(function(d) { 
	return d + ": " +  delegates[d]; })
    .style("background-color", function(d) {
          if (unallocated.indexOf(d) === -1) {
            return "#3399ff";
          } else {
            return "#8585ad";
          }
    });
