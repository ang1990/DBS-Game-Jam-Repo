#pragma strict

class HotTempMachineController extends MachineController {

var tempStrength : float = 0.25;
var optimalTemp : float = 50;

var temperature : Temperature;

var hissingSound : AudioClip;

var timeSinceLastSound : float;
var timeBetweenSounds : float;

var animator : Animator;

function setMachineVars() {
	temperature = GameObject.Find("Environment").GetComponent(Temperature);
	timeSinceLastSound = Time.timeSinceLevelLoad;
	timeBetweenSounds = hissingSound.length;
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
}

function operateMachine() {
	if(Time.timeSinceLevelLoad > timeSinceLastSound + timeBetweenSounds) {
		AudioSource.PlayClipAtPoint(hissingSound,transform.position);
		animator.SetBool("heat", true);
		timeSinceLastSound = Time.timeSinceLevelLoad;
	}
	raiseTemp(tempStrength * updateTime);
}

function raiseTemp(amount : float) {
	temperature.addTemp(amount);
}

function dying() {
	animator.SetBool("dies", true);
}

}