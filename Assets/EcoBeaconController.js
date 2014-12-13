#pragma strict

class EcoBeaconController extends MachineController {

var moneyAmount : int = 20;

var profitTime : float = 2;
private var timeSinceLastMoney : float;

var moneySound : AudioClip;

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
	animator.SetBool("heal", true);
	if(Time.timeSinceLevelLoad > timeSinceLastMoney + profitTime) {
		AudioSource.PlayClipAtPoint(moneySound, transform.position);
		addMoney(moneyAmount);
		timeSinceLastMoney = Time.timeSinceLevelLoad;
	}
}

private function addMoney(amount : int) {
	playerResources.addMoney(amount);
}

}