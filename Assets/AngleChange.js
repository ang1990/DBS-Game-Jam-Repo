#pragma strict

var _transform : Transform;
var maxSpeed : float;
var acceleration : float = 120;
var currentSpeed : float = 0;
var mothersheep : Transform;
var deceleration : float = 120;
var _animator : Animator;

function Start () {
	_transform = transform;
	_animator = GetComponentInChildren(Animator);
}

function Update () {
	if(Input.GetKey("a") && Time.timeScale > 0) {
		_animator.SetBool("Flight",true);
		currentSpeed = Mathf.Min(currentSpeed + (acceleration * Time.deltaTime), maxSpeed);
		if(currentSpeed < 0)
			currentSpeed = Mathf.Min(currentSpeed + (deceleration * Time.deltaTime), maxSpeed);
		mothersheep.localScale.x = -1;
	}
	else if(Input.GetKey("d") && Time.timeScale > 0) {
		_animator.SetBool("Flight",true);
		currentSpeed = Mathf.Max(currentSpeed - (acceleration * Time.deltaTime), -maxSpeed);
		if(currentSpeed > 0)
			currentSpeed = Mathf.Max(currentSpeed - (deceleration * Time.deltaTime), -maxSpeed);
		mothersheep.localScale.x = 1;
	}
	else {
		_animator.SetBool("Flight",false);
		if(currentSpeed > 0) {
			currentSpeed = Mathf.Max(0, currentSpeed - (deceleration * Time.deltaTime));
		}
		else
			currentSpeed = Mathf.Min(0, currentSpeed + (deceleration * Time.deltaTime));
	}
	_transform.Rotate(0,0,currentSpeed * Time.deltaTime);
}