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

function registerEcoMachine(o : GameObject) {
	for(var cont : EcoMachineController in ecoMachinesList) {
		if(cont.gameObject == o) {
			ecoMachinesList.Add(o.GetComponent(EcoMachineController));
			break;	
		}
	}
}

function deleteEcoMachine(o : GameObject) {
	for(var cont : EcoMachineController in ecoMachinesList) {
		if(cont.gameObject == o) {
			ecoMachinesList.Remove(o.GetComponent(EcoMachineController));
			break;
		}
	}
}

function getEco() : float {
	var sumEco : float = 0;
	for (var cont : EcoMachineController in ecoMachinesList) {
		sumEco += cont.getEco();
	}
	return sumEco;
}