#pragma strict

var _transform : Transform;
var moveSpeed : float;
var motherSheep : Transform;

function Start () {
	_transform = transform;
}

function Update () {
	if(Input.GetKey("a")) {
		_transform.Rotate(0,0,moveSpeed*Time.deltaTime);
		motherSheep.localScale.x = -1;
	}
	else if(Input.GetKey("d")) {
		_transform.Rotate(0,0,-moveSpeed*Time.deltaTime);
		motherSheep.localScale.x = 1;
	}
}