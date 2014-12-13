﻿#pragma strict

class HotTempMachineController extends MachineController {

var tempStrength : float = 0.25;
var optimalTemp : float = 50;

var temperature : Temperature;

var animator : Animator;

function setMachineVars() {
	temperature = GameObject.Find("Environment").GetComponent(Temperature);
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
}

function operateMachine() {
	animator.SetBool("heat", true);
	raiseTemp(tempStrength * updateTime);
}

function raiseTemp(amount : float) {
	temperature.addTemp(amount);
}


}