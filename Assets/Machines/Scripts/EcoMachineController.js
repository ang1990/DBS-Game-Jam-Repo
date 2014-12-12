#pragma strict

class EcoMachineController extends MachineController {

var ecoAddPerSecond : float = 0.5;
var currentEco : float;

function setMachineVars() {
	currentEco = 0;
}

function operateMachine() {
	addEco(ecoAddPerSecond * updateTime);
}

function addEco(amount : float) {
}
}