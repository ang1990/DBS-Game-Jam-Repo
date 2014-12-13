#pragma strict


var gameController : GameController;
var maxTime : float;
var timePassed : float;
var progress : float;
var initialXScale : float;
var _transform : Transform;

var timeSinceLastUpdate : float;
var timeBetweenUpdates : float = 0.04;

var oldX : float;
var newX : float;
function Start() {
	initialXScale = transform.localScale.x;
	gameController = GameObject.Find("Environment").GetComponent(GameController);
	maxTime = gameController.getTimeLeft();
	timePassed = 0;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	_transform = transform;
	oldX = _transform.position.x;
	yield WaitForEndOfFrame();
	newX = _transform.position.x + renderer.bounds.size.x/2.05;
}

function Update() {
	if(progress < 1)
		if(Time.timeSinceLevelLoad > timeSinceLastUpdate + timeBetweenUpdates) {
			timePassed += Time.timeSinceLevelLoad - timeSinceLastUpdate;
			progress = timePassed / maxTime;
			if(progress > 1) progress = 1;
			// Decrease X scale by a fraction determined by the time elapsed.
			_transform.localScale.x = (1 - progress)*initialXScale;
			// Move X scale by a part of both the inital X and final X determined by the time elapsed.
			_transform.position.x = progress*newX + (1-progress)*oldX;
			timeSinceLastUpdate = Time.timeSinceLevelLoad;
		}
}
