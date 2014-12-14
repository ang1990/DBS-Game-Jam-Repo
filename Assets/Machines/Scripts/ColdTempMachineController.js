﻿#pragma strict

class ColdTempMachineController extends MachineController {

var tempStrength : float = 0.25;
var optimalTemp : float = 50;

var temperature : Temperature;

var hissingSound : AudioClip;

var animator : Animator;

function setMachineVars() {
	temperature = GameObject.Find("Environment").GetComponent(Temperature);
	animator = GetComponent(Animator);
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
	return;
}

function operateMachine() {
	AudioSource.PlayClipAtPoint(hissingSound,transform.position);
	animator.SetBool("cooling", true);
	lowerTemp(tempStrength * updateTime);
	
}

function lowerTemp(amount : float) {
	temperature.reduceTemp(amount);
}

function dying() {
	animator.SetBool("dies", true);
}

}