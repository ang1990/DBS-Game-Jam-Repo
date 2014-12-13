#pragma strict

class MinerController extends MachineController {

var moneyAmount : int = 20;

var profitTime : float = 2;
private var timeSinceLastMoney : float;

var moneySound : AudioClip;

var playerResources : PlayerResources;

function setMachineVars() {
	playerResources = GameObject.Find("Mothersheep").GetComponent(PlayerResources);
}

function operateMachine() {
	if(Time.timeSinceLevelLoad > timeSinceLastMoney + profitTime) {
		AudioSource.PlayClipAtPoint(moneySound, transform.position);
		addMoney(moneyAmount);
		timeSinceLastMoney = Time.timeSinceLevelLoad;
	}
}

private function addMoney(amount : int) {
//	playerResources.addMoney(amount);
}

}