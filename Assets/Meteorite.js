#pragma strict

var XDistTravel : float;

var timeBetweenUpdates : float = 0.05;
var timeSinceLastUpdate : float;

var maxTime : float;

var gameController : GameController;

function Start () {
	XDistTravel = GameObject.Find("Red Timer").renderer.bounds.size.x;
	gameController = GameObject.Find("Environment").GetComponent(GameController);
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + timeBetweenUpdates) {
		maxTime = 0;
		}
}	