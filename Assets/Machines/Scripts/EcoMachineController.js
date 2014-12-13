#pragma strict

class EcoMachineController extends MachineController {

var animator : Animator;

var trees : GameObject[];
private var treeControllers : TreeController[];

var ecoAddPerSecond : float = 0.5;
var currentEco : float;
var maxEco : float = 20;
var ecoPerTree : float = 2;

var ecosystem : Ecosystem;

function setMachineVars() {
	currentEco = 0;
	animator = GetComponent(Animator);
	ecosystem = GameObject.Find("Environment").GetComponent(Ecosystem);
}

function getEco() : float {
	return currentEco;
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
	return;
}

function operateMachine() {
	animator.SetBool("heal", true);
	addEco(ecoAddPerSecond * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
}

function addEco(amount : float) {
	if(amount > 0) {
		var difference = Mathf.Min(currentEco + amount, maxEco) - currentEco;
		currentEco = Mathf.Min(currentEco + amount, maxEco);
		ecosystem.addEco(difference);
	}
}

function die() {
	Destroy(transform.parent);
	Destroy(transform);
}

}