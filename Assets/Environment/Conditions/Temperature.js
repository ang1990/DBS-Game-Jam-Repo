#pragma strict

var currentTemp : float;

var deltaTemp : float;

var minTemp : float = 0;
var maxTemp : float = 100;

function Start () {
	currentTemp = 100;
	deltaTemp = 0;
}

function Update() {
	updateTemp();
}

private function updateTemp() {
	yield WaitForEndOfFrame();
	if(deltaTemp != 0) {
		currentTemp += deltaTemp;
		if(currentTemp > maxTemp) currentTemp = maxTemp;
		else if(currentTemp < minTemp) currentTemp = minTemp;
		deltaTemp = 0;	
	}
}

// Don't forget to update the sprites / animations(?)

function getTemp() : float {
	return currentTemp;
}

function getTempPercent() : float {
	return (currentTemp - minTemp) / (maxTemp - minTemp);
}

function addTemp(amount : float) {
	if(amount > 0) {
		deltaTemp += amount;
	}
}

function reduceTemp(amount : float) {
	if(amount > 0) {
		deltaTemp -= amount;
	}
}