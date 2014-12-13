#pragma strict

var rotationSpd : float;

var timeSinceLastUpdate : float;
var updateTime : float;
var _anchor : Transform;

var miner : GameObject;

function Start () {
	rotationSpd = -30;
	updateTime = 4.1;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	_anchor = transform.parent;
}

function Update () {
	_anchor.Rotate(0,0,rotationSpd * Time.deltaTime);
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		if(Random.Range(0,1) < 0.35) {
			var minerObject = Instantiate(miner, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z));
			minerObject.transform.parent = GameObject.Find("Mars").transform;
		}
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}
	
}