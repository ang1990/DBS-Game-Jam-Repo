#pragma strict

var currentPop : float;
var minPop : float = 0;
var maxPop : float = 100;

var temp : Temperature;
var eco : Ecosystem;

function Start() {
	temp = GetComponent(Temperature);
	eco = GetComponent(Ecosystem);
}

function getPop() : float {
	return currentPop;
}

function addPop(amount : float) {
	if(amount > 0) {
		currentPop = Mathf.Min(maxPop, currentPop + amount);
	}
}

function reducePop(amount : float) {
	if(amount > 0) {
		currentPop = Mathf.Max(minPop, currentPop - amount);
	}
}