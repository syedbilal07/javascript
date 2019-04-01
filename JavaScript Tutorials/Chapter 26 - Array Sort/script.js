// Sort Method
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("sortMethod").innerHTML = fruits;
function sortMethod()
{
	document.getElementById("sortMethod").innerHTML = fruits.sort();
}
// Reverse Method 
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("reverseMethod").innerHTML = fruits;
function reverseMethod()
{
	fruits.sort();
	fruits.reverse();
	document.getElementById("reverseMethod").innerHTML = fruits;
}
function numericSortMethod()
{
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a,b){return a-b});
	document.getElementById("numericSortMethod").innerHTML = points;
}
function numericSortDescending()
{
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a,b){return b-a});
	document.getElementById("numericSortDescending").innerHTML = points;
}
// Sorting Both Method
	var points = [40, 100, 1, 5, 25, 10];
	document.getElementById("sortingBoth").innerHTML = points;
function sortAlphabetically()
{
	points.sort();
	document.getElementById("sortingBoth").innerHTML = points;
}
function sortNumeric()
{
	points.sort(function(a,b){return a-b});
	document.getElementById("sortingBoth").innerHTML = points;
}
// Sorting Random Method
	var points = [40, 100, 1, 5, 25, 10];
	document.getElementById("sortingRandom").innerHTML = points;
function sortingRandom()
{
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a,b){return 0.5 - Math.random()});
	document.getElementById("sortingRandom").innerHTML = points;
}
function highestValue()
{
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a,b){return b-a});
	document.getElementById("highestValue").innerHTML = points[0];
}
function lowestValue()
{
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a,b){return a-b});
	document.getElementById("lowestValue").innerHTML = points[0];
}
// Comparing Object Property
var cars = 
[
{type:"Civic", year:2016},
{type:"City", year:2001},
{type:"Accord", year:2010}
];
displayCars();
function displayCars()
{
	document.getElementById("comparingObjectProperty").innerHTML = 
	cars[0].type + " " + cars[0].year + "<br />" +
	cars[1].type + " " + cars[1].year + "<br />" +
	cars[2].type + " " + cars[2].year;
}
function comparingObjectProperty()
{
	cars.sort(function(a,b){return a.year - b.year});
	displayCars();
}

// Comparing String Property
var cars = [
{type:"Mazda", year:2016},
{type:"City", year:2001},
{type:"Accord", year:2010}]
displayCar();
function displayCar()
{
	document.getElementById("comparingStringProperty").innerHTML = 
	cars[0].type + " " + cars[0].year + "<br />" +
	cars[1].type + " " + cars[1].year + "<br />" +
	cars[2].type + " " + cars[2].year;
}
function comparingStringProperty()
{
	cars.sort(function(a,b)
	{
		var x = a.type.toLowerCase();
		var y = b.type.toLowerCase();
		if (x < y) {return -1;}
		if (x > y) {return 1;}
		return 0;
	});
	displayCar();
}