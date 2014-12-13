#pragma strict

enum TerraPhase {T1, T2, T3};

enum GameState {Playing, Victory, Defeat};

private var timeSinceLastUpdate : float;
var updateTime : float = 0.025;
private var phase : TerraPhase;
private var gameState : GameState;

var timeLeft : float = 200;

var disasterSpawner : DisasterSpawner;

var timeBetweenDisasters : float = 20;
var timeSinceLastDisaster : float;
var chanceOfDisaster : float = 0.25;

var temperature : Temperature;
var ecosystem : Ecosystem;
var population : Population;

var ecoMachinesAllowed : boolean = false;

function Start () {
	phase = TerraPhase.T1;
	disasterSpawner = GetComponent(DisasterSpawner);
	timeLeft = 200;
	gameState = GameState.Playing;
	temperature = GetComponent(Temperature);
	ecosystem = GetComponent(Ecosystem);
	population = GetComponent(Population);
}

function Update () {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		timeLeft -= (Time.timeSinceLevelLoad - timeSinceLastUpdate);
		if(timeLeft < 0) {
			gameState = GameState.Defeat;
		}
		else if(population.getPop() > 0.7 * population.getMaxPop())
			gameState = GameState.Victory;
		switch(phase) {
			case TerraPhase.T1 :
				if (temperature.getTempPercent() > 0.35 && temperature.getTempPercent() < 0.65) {
			// This phase only allows Miners and Hot/Cold Machines.
					phase = TerraPhase.T2;
					ecoMachinesAllowed = true;
				}
				break;
			case TerraPhase.T2 :
			// This phase allows Eco Machines as well.
				break;
			default: break;
			}
	switch(gameState) {
		case GameState.Playing:
			break;
		case GameState.Victory:
			Application.LoadLevel("Win");
			break;
		case GameState.Defeat:
			Application.LoadLevel("Fail");
			break;
		default: break;
	}
	handleDisasterSpawning();
	
	timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}	
}

function ecoMachinesAvailable() : boolean {
	return ecoMachinesAllowed;
}

function getTimeLeft() : float {
	return timeLeft;
}

function handleDisasterSpawning() {
	if(Time.timeSinceLevelLoad > timeSinceLastDisaster + timeBetweenDisasters) {
		timeSinceLastDisaster = Time.timeSinceLevelLoad;
		if(Random.Range(0,1) < chanceOfDisaster) {
			disasterSpawner.spawnRandomDisaster();
		}
	}
}