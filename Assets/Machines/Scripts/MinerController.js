#pragma strict

class MinerController extends MachineController {

var moneyAmount : int = 20;

var profitTime : float = 2;
private var timeSinceLastMoney : float;

var moneySound : AudioClip;
var drillSound : AudioClip;

var playerResources : PlayerResources;

var animator : Animator;

function setMachineVars() {
	playerResources = GameObject.Find("Mothersheep").GetComponent(PlayerResources);
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
	return;
}

function operateMachine() {
	animator.SetBool("mine", true);
	if(Time.timeSinceLevelLoad > timeSinceLastMoney + profitTime) {
		AudioSource.PlayClipAtPoint(moneySound, transform.position);
		AudioSource.PlayClipAtPoint(drillSound, transform.position);
		addMoney(moneyAmount);
		timeSinceLastMoney = Time.timeSinceLevelLoad;
	}
}

function dying() {
	animator.SetBool("dies", true);
}

private function addMoney(amount : int) {
	playerResources.addMoney(amount);
}


}