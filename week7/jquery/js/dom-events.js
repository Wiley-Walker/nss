var targetDiv = document.getElementById("mousey");
var hiddenDiv = document.getElementById("hidden");



/*
targetDiv.onmouseover=function(){

targetDiv.classList.remove('red');
targetDiv.classList.add('blue');
}
*/

/*targetDiv.onmouseover = function () {
	targetDiv.classList.toggle('red');
} */

/*targetDiv.onmouseover = function () {
	targetDiv.classList.remove('red');
}
targetDiv.onmouseout = function () {
	targetDiv.classList.add('red');
}*/

var peopleToDisplay = [];
peopleToDisplay.push("Robert Johnson");
peopleToDisplay.push("John Lee Hooker");
peopleToDisplay.push("T-Bone Walker");
peopleToDisplay.push("Muddy Waters");
peopleToDisplay.push("Big Mama Thornton");
peopleToDisplay.push("Robert Cray");

targetDiv.onclick = function () {
	hiddenDiv.classList.toggle('hide');
	hiddenDiv.innerHTML = peopleToDisplay.join("<br>")
	alert ("Hello World");
}

targetDiv.onmouseout = function () {
	hiddenDiv.classList.add('hide');
}