#pragma strict

class TempMachineController extends MachineController {

enum TempMode {Raise, Lower};

var tempStrength : float = 0.5;
var optimalTemp : float = 50;

var temperature : Temperature;

private var mode : TempMode;

function setMachineVars() {
	mode = TempMode.Raise;
	temperature = GameObject.Find("environment").GetComponent(Temperature);
}

function operateMachine() {
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
	temperature.addTemp(amount);
}

function lowerTemp(amount : float) {
	temperature.reduceTemp(amount);
}


}