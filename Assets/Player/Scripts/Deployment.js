#pragma strict

var miner : GameObject;
var coldMachine : GameObject;
var hotMachine : GameObject;
var ecoMachine : GameObject;

var minerCost : int;
var coldMachineCost : int;
var hotMachineCost : int;
var ecoMachineCost : int;

var playerResources : PlayerResources;

function Start() {
	playerResources = GameObject.Find("mothersheep").GetComponent(PlayerResources);
}

function deployMiner() {
	if(playerResources.getMoney() >= minerCost) {
		playerResources.reduceMoney(minerCost);
		Instantiate(miner);
	}
}

function deployColdMachine() {
	if(playerResources.getMoney() >= coldMachineCost) {
		playerResources.reduceMoney(coldMachineCost);
		Instantiate(coldMachine);
	}
}

function deployHotMachine() {
	if(playerResources.getMoney() >= hotMachineCost) {
		playerResources.reduceMoney(hotMachineCost);
		Instantiate(hotMachine);
	}
}
function deployEcoMachine() {
	if(playerResources.getMoney() >= ecoMachineCost) {
		playerResources.reduceMoney(ecoMachineCost);
		Instantiate(ecoMachine);
	}
}

