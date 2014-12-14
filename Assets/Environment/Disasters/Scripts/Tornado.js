#pragma strict

var timeSinceLastWipe : float;
var timeBetweenWipes : float;
var currentAngle : float;

function Start () {
	Destroy (gameObject, 15);
}

function Update () {
	transform.Rotate(0,0,5*Time.deltaTime);
}

//var angularVelocity : float;
//var maxVelocity : float = 10;
//
//var currentAngle : float;
//
//var velocityUpdateTime : float = 4;
//var timeSinceLastVelocityUpdate : float;
//
//var damageWidth : float = 5;
//var damagePerSecond : float = 10;
//
//var timeSinceLastUpdate : float;
//var updateTime : float = 0.025;
//
//var timeSinceLastDamage : float;
//var damageUpdateTime : float = 0.5;
//
//var health : float;
//
//function Start () {
//	currentAngle = Random.Range(0,360);
//	timeSinceLastDamage = Time.timeSinceLevelLoad;
//	timeSinceLastUpdate = Time.timeSinceLevelLoad;
//	timeSinceLastVelocityUpdate = Time.timeSinceLevelLoad;
//}
//
//function Update () {
//	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
//		if(Time.timeSinceLevelLoad > timeSinceLastVelocityUpdate + velocityUpdateTime) {
//			timeSinceLastVelocityUpdate = Time.timeSinceLevelLoad;
//			updateVelocity();
//		}
//		updateAngle();
//		if(Time.timeSinceLevelLoad > timeSinceLastDamage + damageUpdateTime) {
//			dealDamage();
//			timeSinceLastDamage = Time.timeSinceLevelLoad;
//		}
//		timeSinceLastUpdate = Time.timeSinceLevelLoad;
//	}
//}

//function lowerHealth(amount : float) {
//	if (amount > 0)
//		health = Mathf.Max(0,health-amount);
//	if(health <= 0) {
//		// We need an animation of the tornado dying down
//		Destroy(gameObject);
//	}
//}

//function updateAngle() {
//	currentAngle += (angularVelocity*(Time.timeSinceLevelLoad - timeSinceLastUpdate));
//	if(currentAngle < 0) currentAngle += 360;
//		else if(currentAngle > 360) currentAngle -= 360;
//	transform.rotation.z = currentAngle;
//}

//function dealDamage() {
//	var machines : GameObject[] = GameObject.FindGameObjectsWithTag("Machine");
//	for(var m : GameObject in machines) {
//		var mControl : MachineController = m.GetComponent(MachineController);
//		var machineAngle : float = mControl.getAngle();
//		if(angleIsWithinRange(machineAngle)) {
//			mControl.reduceHealth(damagePerSecond * (timeSinceLastDamage - damageUpdateTime));
//		}
//	}
//	return;
//}

//function angleIsWithinRange(angle : float) : boolean {
//	var difference : float = (angle - currentAngle)%360;
//	if(difference > 180)
//		return !(difference > (360 + damageWidth) || difference < (360 - damageWidth));
//	else
//		return !(difference > damageWidth || difference < -damageWidth);
//}
//
//function updateVelocity() {
//	angularVelocity = Random.Range(-maxVelocity, maxVelocity);
//}