#pragma strict

var MinerPrefab : GameObject;
var EcoPrefab : GameObject;
var HeatPrefab : GameObject;
var ColdPrefab : GameObject;

var _anchor : Transform;

function Start () {
	_anchor = transform.parent;
}

function Update () {
	
	if(Input.GetKeyDown("v")) {
		Deployment (MinerPrefab);
	}
}

function Deployment  (prefab : GameObject) {
	Instantiate (prefab, Vector3(0,0,0),Quaternion.Euler(0,0,_anchor.eulerAngles.z));
}