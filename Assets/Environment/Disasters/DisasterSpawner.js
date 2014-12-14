#pragma strict

var disasters : GameObject[];

var tornado : GameObject;

var currentDisasters : GameObject[];

function spawnRandomDisaster() {
	//if(disasters.Length > 0) {
		//Instantiate(disasters[Mathf.CeilToInt(Random.Range(0,disasters.Length))],Vector3.zero, Quaternion.Euler(0,0,Random.Range(0,359)));
	//}
	
	Instantiate(tornado,Vector3.zero, Quaternion.Euler(0,0,Random.Range(0,359)));
}