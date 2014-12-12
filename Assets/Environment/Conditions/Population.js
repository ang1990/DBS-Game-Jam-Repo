#pragma strict

var currentPop : float;
var minPop : float = 0;
var maxPop : float = 100;

var temp : MonoBehaviour;
var eco : MonoBehaviour;

function Start() {
	temp = GetComponent(Temperature) as MonoBehaviour;
	eco = GetComponent(Ecosystem) as MonoBehaviour;
	
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