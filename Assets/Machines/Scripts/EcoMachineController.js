#pragma strict

class EcoMachineController extends MachineController {

var animator : Animator;
var trees : GameObject[];
private var treeControllers : TreeController[];

var ecoAddPerSecond : float = 0.5;
var currentEco : float;
var maxEco : float = 20;
var ecoPerTree : float = 2;

function setMachineVars() {
	currentEco = 0;
	treeControllers = new TreeController[10];
	for (var i : int = 0; i < trees.Length; i++) {
		treeControllers[i] = trees[i].GetComponent(TreeController) as TreeController;
	}
	GameObject.Find("Environment").GetComponent(Ecosystem).registerEcoMachine(gameObject);
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
		currentEco = Mathf.Min(currentEco + amount, maxEco);
		treeControllers[Mathf.FloorToInt(currentEco/ecoPerTree - 1)].setSize(Mathf.Repeat(currentEco,ecoPerTree)/ecoPerTree);
		treeControllers[Mathf.CeilToInt(currentEco/ecoPerTree)]
						.setSize(Mathf.Min(1,currentEco - Mathf.CeilToInt(currentEco/ecoPerTree)/ecoPerTree));
	}
}

function die() {
	GameObject.Find("Environment").GetComponent(Ecosystem).deleteEcoMachine(gameObject);
}

}