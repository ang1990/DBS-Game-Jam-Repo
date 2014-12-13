#pragma strict

var XDistTravel : float;
var initialX : float;

var timeBetweenUpdates : float = 0.05;
var timeSinceLastUpdate : float;

var maxTime : float;
var timeLeft : float;

var gameController : GameController;

function Start () {
	XDistTravel = (GameObject.Find("redTimer").renderer.bounds.size.x)*0.85;
	initialX = (XDistTravel*-0.52);
	gameController = GameObject.Find("Environment").GetComponent(GameController);
	maxTime = gameController.getTimeLeft();
	timeLeft = maxTime;
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + timeBetweenUpdates) {
			timeLeft -= (Time.timeSinceLevelLoad - timeSinceLastUpdate);
			var progress : float = Mathf.Min(1, 1 - timeLeft/maxTime);
			transform.position.x = initialX + (progress * XDistTravel);
			timeSinceLastUpdate = Time.timeSinceLevelLoad;
		}
}	