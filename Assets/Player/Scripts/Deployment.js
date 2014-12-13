#pragma strict

var miner : GameObject;
var coldMachine : GameObject;
var hotMachine : GameObject;
var ecoMachine : GameObject;

var minerCost : int;
var coldMachineCost : int;
var hotMachineCost : int;
var ecoMachineCost : int;

var _anchor : Transform;

var playerResources : PlayerResources;

function Start() {
	playerResources = GameObject.Find("Mothersheep").GetComponent(PlayerResources);
	_anchor = transform.parent;
}

function Update() {
	if(Input.GetKeyDown("v")) {
		deployMiner();
	}
}

function deployMiner() {
	if(playerResources.getMoney() >= minerCost) {
		playerResources.reduceMoney(minerCost);
		Instantiate(miner, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z));
	}
}

function deployColdMachine() {
	if(playerResources.getMoney() >= coldMachineCost) {
		playerResources.reduceMoney(coldMachineCost);
		Instantiate(coldMachine, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z));
	}
}

function deployHotMachine() {
	if(playerResources.getMoney() >= hotMachineCost) {
		playerResources.reduceMoney(hotMachineCost);
		Instantiate(hotMachine, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z));
	}
}
function deployEcoMachine() {
	if(playerResources.getMoney() >= ecoMachineCost) {
		playerResources.reduceMoney(ecoMachineCost);
		Instantiate(ecoMachine, Vector3.zero, Quaternion.Euler(0,0,_anchor.eulerAngles.z));
	}
}

