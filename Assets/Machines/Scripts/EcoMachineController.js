#pragma strict

class EcoMachineController extends MachineController {

var animator : Animator;

var tree1 : GameObject;
var tree2 : GameObject;
var tree3 : GameObject;
var tree4 : GameObject;

var _anchor : Transform;

private var treeControllers : TreeController[];

var ecoAddPerSecond : float = 0.5;
var currentEco : float;
var maxEco : float = 20;
var ecoPerTree : float = 2;

var ecosystem : Ecosystem;

var nTree : int;
var compoundTime : float;

function setMachineVars() {
	currentEco = 0;
	nTree = 0;
	compoundTime = 0;
	animator = GetComponent(Animator);
	ecosystem = GameObject.Find("Environment").GetComponent(Ecosystem);
	_anchor = transform.parent;
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
	compoundTime += Time.timeSinceLevelLoad - timeSinceLastUpdate;
	if (compoundTime > 2 && nTree < 10) {
		nTree++;
		compoundTime = 0;
		growTree();
	}
}

function addEco(amount : float) {
	if(amount > 0) {
		var difference = Mathf.Min(currentEco + amount, maxEco) - currentEco;
		currentEco = Mathf.Min(currentEco + amount, maxEco);
		ecosystem.addEco(difference);
	}
}

function growTree () {
	var anglechanger : float;
	anglechanger = Random.Range(-5,6);
	var tree : int;
	tree = Random.Range(1,5);
	
	switch (tree) {
		case 1:
			Instantiate(tree1, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z+anglechanger));
			break;
		case 2:
			Instantiate(tree2, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z+anglechanger));
			break;
		case 3:
			Instantiate(tree3, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z+anglechanger));
			break;
		case 4:
			Instantiate(tree4, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z+anglechanger));
			break;
		default:
			break;
	}
	
}

function dying() {
	animator.SetBool("dies", true);
}



}