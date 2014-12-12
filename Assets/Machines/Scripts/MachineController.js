#pragma strict

class MachineController extends MonoBehaviour {

protected enum MachineState {Deploying, Operating, Dying};

protected var maxHealth : float = 100;
protected var health : float;

protected var timeSinceLastUpdate : float;
protected var updateTime : float = 0.025;

protected var state : MachineState;

function Start () {
	health = maxHealth;
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	state = MachineState.Deploying;
	setMachineVars();
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
		switch(state) {
			case MachineState.Deploying:
				deploy();
				break;
			case MachineState.Operating:
				operateMachine();
				break;
			case MachineState.Dying:
				Destroy(gameObject);
				break;
			default: break;
		}
	}
}

// Override!!!!
function setMachineVars() {}
function deploy() {
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

// Override in children classes.
function operateMachine() {}

function reduceHealth(amount : float) {
	if(amount > 0) {
		health = Mathf.Max(0, health - amount);
	}
	if(health == 0) 
		kill();
}

// Placeholder. Might have to update here or override depending on future implementation.
function kill() {}

}