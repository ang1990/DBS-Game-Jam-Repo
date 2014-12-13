#pragma strict

class MachineController extends MonoBehaviour {

protected enum MachineState {Deploying, Operating, Idling, Dying};

protected var maxHealth : float = 100;
protected var health : float;

protected var angle : float;

private var _transform : Transform;

protected var timeSinceLastUpdate : float;
protected var updateTime : float = 0.025;

protected var state : MachineState;

protected var deployTime : float = 1;
protected var deployTravelDist : float;

var animator : Animator;

var deploySound : AudioClip;

function Start () {
	health = maxHealth;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	deployTravelDist = 16.2;
	state = MachineState.Deploying;
	setMachineVars();
	_transform = transform;
	AudioSource.PlayClipAtPoint(deploySound, _transform.position);
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		switch(state) {
			case MachineState.Deploying:
				deploy();
				if(_transform.localPosition.y < 50) {
					state = MachineState.Operating;
					
				}
				break;
			case MachineState.Operating:
				operateMachine();
				break;
			case MachineState.Idling:
				break;
			case MachineState.Dying:
				Destroy(gameObject);
				break;
			default: break;
		}
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}
}

function setAngle(val : float) {
	angle = val;
}

function getAngle() : float {
	return angle;
}

// Override!!!!
function setMachineVars() {}
function deploy() {
	_transform.position.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
	return;
}

function getHealth() : float {
	return health;
}

function addHealth(amount : float) {
	if(amount > 0) {
		health = Mathf.Min(maxHealth, health + amount);
	}
}

function reduceHealth(amount : float) {
	if(amount > 0) {
		health = Mathf.Max(0, health - amount);
	}
	if(health == 0) 
		die();
}


// Override in children classes.
function operateMachine() {}

// Placeholder. Might have to update here or override depending on future implementation.
function die() {}

}