#pragma strict

var angularVelocity : float;
var maxVelocity : float = 10;

var currentAngle : float;

var velocityUpdateTime : float = 4;
var timeSinceLastVelocityUpdate : float;

var damageWidth : float = 5;
var damagePerSecond : float = 10;

var timeSinceLastUpdate : float;
var updateTime : float = 0.025;

var timeSinceLastDamage : float;
var damageUpdateTime : float = 0.5;


function Start () {
	currentAngle = Random.Range(0,360);
	timeSinceLastDamage = Time.timeSinceLevelLoad;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	timeSinceLastVelocityUpdate = Time.timeSinceLevelLoad;
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		if(Time.timeSinceLevelLoad > timeSinceLastVelocityUpdate + velocityUpdateTime) {
			timeSinceLastVelocityUpdate = Time.timeSinceLevelLoad;
			updateVelocity();
		}
		updateAngle();
		if(Time.timeSinceLevelLoad > timeSinceLastDamage + damageUpdateTime
		dealDamage();
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}
}

function updateAngle() {
	currentAngle += (angularVelocity*(Time.timeSinceLevelLoad - timeSinceLastUpdate));
	if(currentAngle < 0) currentAngle += 360;
		else if(currentAngle > 360) currentAngle -= 360;
	transform.rotation.z = currentAngle;
}

function dealDamage() {
	var machines : GameObject[] = FindGameObjectsWithTag("Machine");
	for(var m : GameObject in machines) {
		var mControl : MachineController = m.GetComponent(MachineController);
		var machineAngle : float = mControl.getAngle();
		if(angleIsWithinRange(machineAngle)) {
			mControl.reduceHealth(damagePerSecond * (Time.timeSinceLastDamage - damageUpdateTime));
		}
	}
	return;
}

function updateVelocity() {
	angularVelocity = Random.Range(-maxVelocity, maxVelocity);
}