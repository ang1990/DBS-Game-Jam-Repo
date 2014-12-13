#pragma strict

var timeSinceLastWipe : float;
var timeBetweenWipes : float;

function Start() {
	timeSinceLastWipe = Time.timeSinceLevelLoad;
	timeBetweenWipes = 120;
}

function Update () {
	transform.Rotate(0,0,5*Time.deltaTime);
	if(Time.timeSinceLevelLoad > timeSinceLastWipe + timeBetweenWipes) {
	if(transform.childCount > 0)
		while(transform.childCount > 0)
			GameObject.Destroy(transform.GetChild(0));
	timeSinceLastWipe = Time.timeSinceLevelLoad;
	}
}