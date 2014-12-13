#pragma strict

class ColdTempMachineController extends MachineController {


var tempStrength : float = 0.5;
var optimalTemp : float = 50;

var temperature : Temperature;

var animator : Animator;

function setMachineVars() {
	temperature = GameObject.Find("environment").GetComponent(Temperature);
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
	return;
}

function operateMachine() {
	animator.SetBool("cooling", true);
			lowerTemp(tempStrength * updateTime);
	
}

function lowerTemp(amount : float) {
	temperature.reduceTemp(amount);
}


}