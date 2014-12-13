#pragma strict

private var _transform : Transform;
private var _animator : Animator;
private var state : int;

function Start () {
	state = 1;
	_transform = transform;
	_animator = gameObject.GetComponent(Animator);
	_animator.SetBool("mine", false);
	
}

function Update () {
	if (state == 1) {
		if (_transform.localPosition.y < 51) {
			state = 2;
		}
		_transform.localPosition.y -= 1;
	}
	
	if (state == 2) {
		if (!_animator.GetBool("mine"))
			_animator.SetBool("mine",true);
	}
}