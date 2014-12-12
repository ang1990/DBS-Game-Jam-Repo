#pragma strict

class TempMachineController extends MachineController {

enum TempMode {Raise, Lower};

var tempStrength : float = 0.5;
var optimalTemp : float = 50;
var currentTemp : float;

private var mode : TempMode;

function setMachineVars() {
	mode = TempMode.Raise;
	currentTemp = 100;
}

function operateMachine() {
	mode = currentTemp > optimalTemp ? TempMode.Lower : TempMode.Raise;
	switch(mode) {
		case TempMode.Raise :
			raiseTemp(tempStrength * updateTime);
			break;
		case TempMode.Lower :
			lowerTemp(tempStrength * updateTime);
			break;
		default:
			break;
	}
	
}

function raiseTemp(amount : float) {
}

function lowerTemp(amount : float) {
}


}