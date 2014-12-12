#pragma strict

var _transform : Transform;
var moveSpeed : float;

function Start () {
	_transform = transform;
}

function Update () {
	if(Input.GetKey("a"))
		_transform.Rotate(0,0,moveSpeed*Time.deltaTime);
	else if(Input.GetKey("d"))
		_transform.Rotate(0,0,-moveSpeed*Time.deltaTime);
}