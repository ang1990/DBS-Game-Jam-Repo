#pragma strict

class MinerController extends MachineController {

var moneyAmount : int = 20;

var profitTime : float = 2;
private var timeSinceLastMoney : float;

var playerResources : PlayerResources;

function setMachineVars() {
	playerResources = GameObject.Find("mothersheep").GetComponent(PlayerResources);
}

function operateMachine() {
	if(Time.timeSinceLevelLoad > timeSinceLastMoney + profitTime) {
		addMoney(moneyAmount);
		timeSinceLastMoney = Time.timeSinceLevelLoad;
	}
}

private function addMoney(amount : int) {
	playerResources.addMoney(amount);
}

}