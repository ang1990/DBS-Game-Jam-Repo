#pragma strict

var _transform : Transform;
var moveSpeed : float = 0.01;

function Start () {
	_transform = transform;
}

function Update () {
	if(Input.GetKey("a"))
		_transform.rotation.z += moveSpeed*Time.deltaTime;
	else if(Input.GetKey("d"))
		_transform.rotation.z -= moveSpeed*Time.deltaTime;
}