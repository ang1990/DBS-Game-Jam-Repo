#pragma strict

class MinerController extends MachineController {

var moneyAmount : float = 20;

var profitTime : float = 2;
private var timeSinceLastMoney : float;


function operateMachine() {
	if(Time.timeSinceLevelLoad > timeSinceLastMoney + profitTime) {
		addMoney(moneyAmount);
		timeSinceLastMoney = Time.timeSinceLevelLoad;
	}	
}

function addMoney(amount : float) {

}

}