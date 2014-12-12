#pragma strict

var currentTemp : float;

var minTemp : float = 0;
var maxTemp : float = 100;

function Start () {
	currentTemp = 100;
}


// Don't forget to update the sprites / animations(?)

function getTemp() : float {
	return currentTemp;
}

function addTemp(amount : float) {
	if(amount > 0) {
		currentTemp = Mathf.Min(maxTemp, currentTemp + amount);
	}
}

function reduceTemp(amount : float) {
	if(amount > 0) {
		currentTemp = Mathf.Max(minTemp, currentTemp - amount);
	}
}