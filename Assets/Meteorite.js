#pragma strict

var XDistTravel : float;
var initialX : float;

var timeBetweenUpdates : float = 0.05;
var timeSinceLastUpdate : float;

var maxTime : float;
var timeLeft : float;

var gameController : GameController;

function Start () {
	XDistTravel = (GameObject.Find("Red Timer").renderer.bounds.size.x) / 2;
	initialX = transform.position.x - (0.5 * renderer.bounds.size.x);
	gameController = GameObject.Find("Environment").GetComponent(GameController);
	maxTime = 10;// gameController.getTimeLeft();
	timeLeft = maxTime;
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + timeBetweenUpdates) {
			timeLeft -= (Time.timeSinceLevelLoad - timeSinceLastUpdate);
			var progress : float = 1 - timeLeft/maxTime;
			transform.position.x =  initialX + (progress * XDistTravel);
			timeSinceLastUpdate = Time.timeSinceLevelLoad;
		}
}	