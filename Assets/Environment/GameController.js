#pragma strict

enum TerraPhase {T1, T2, T3};

private var timeSinceLastUpdate : float;
var updateTime : float = 0.025;
private var phase = TerraPhase.T1;

var disasterSpawner : DisasterSpawner;

var timeBetweenDisasters : float = 20;
var timeSinceLastDisaster : float;
var chanceOfDisaster : float = 0.25;

function Start () {
	phase = TerraPhase.T1;
	disasterSpawner = GetComponent(DisasterSpawner);
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
		switch(phase) {
			case TerraPhase.T1 :
				break;
			case TerraPhase.T2 :
				break;
			case TerraPhase.T3 :
				break;
			default: break;
			}
		handleDisasterSpawning();
		}
}

function handleDisasterSpawning() {
	if(Time.timeSinceLevelLoad > timeSinceLastDisaster + timeBetweenDisasters) {
		timeSinceLastDisaster = Time.timeSinceLevelLoad;
		if(Random.Range(0,1) < chanceOfDisaster) {
			disasterSpawner.spawnRandomDisaster();
		}
	}
}