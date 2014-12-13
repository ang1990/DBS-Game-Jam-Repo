#pragma strict

import System.Collections.Generic;

var minEco : float = 0;
var maxEco : float = 100;
var currentEco : float = 0;

var tempUpperBound : float;
var tempLowerBound : float;

var timeSinceLastUpdate : float;
var updateTime : float = 0.025;

var upperLimit : float = 0.65;
var lowerLimit : float = 0.3;

var ecoMachinesList : List.<EcoMachineController>;

function Start () {
	var temperature = gameObject.GetComponent(Temperature);
	tempUpperBound = upperLimit*temperature.maxTemp + lowerLimit*temperature.minTemp;
	tempLowerBound = lowerLimit*temperature.maxTemp + upperLimit*temperature.minTemp;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	ecoMachinesList = new List.<EcoMachineController>();
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}
}

function getEcoPercentage() : float {
	return currentEco / maxEco;
}


function addEco(amount : float) {
	if(amount > 0) {
		currentEco = Mathf.Min(maxEco, currentEco+amount);
	}
}

function reduceEco(amount : float) {
	if(amount > 0) {
		currentEco = Mathf.Max(minEco, currentEco - amount);
	}
}

function getEco() : float {
	return currentEco;
}