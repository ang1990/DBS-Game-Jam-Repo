#pragma strict

var minEco : float = 0;
var maxEco : float = 100;
var currentEco : float = 0;

var tempUpperBound : float;
var tempLowerBound : float;

var timeSinceLastUpdate : float;
var updateTime : float = 0.025;

function Start () {
	var temperature = gameObject.GetComponent(Temperature);
	tempUpperBound = 0.6*temperature.maxTemp;
	tempLowerBound = 0.4*temperature.minTemp;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
		reduceEco(calculateEcoLossRate());
	}
}

// Don't forget about disasters!

function calculateEcoLossRate() : float {
	var disasterCount : int = GameObject.FindGameObjectsWithTag("Disaster").Length;
	
	return 0;
}

function getEco() : float {
	return currentEco;
}

function addEco(amount : float) {
	if(amount > 0) {
		currentEco = Mathf.Min(maxEco, currentEco + amount);
	}
}

function reduceEco(amount : float) {
	if(amount > 0) {
		currentEco = Mathf.Max(minEco, currentEco - amount);
	}
}