#pragma strict

private var tempColdBtnRed : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
private var isDisplay : boolean;
private var MAX_TIME : float;
private var curTime : float;

function setDisplay(_isDisplay : boolean) {
	isDisplay = _isDisplay;
	curTime = MAX_TIME;
}

function Start () {
	tempColdBtnRed = GameObject.Find("tempColdBtnRed");
	vertices = tempColdBtnRed.GetComponent(MeshFilter).mesh.vertices;
	uv = tempColdBtnRed.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
	isDisplay = false;
	curTime = MAX_TIME = 1.5f;
}

function Update () {
	if (!isDisplay) 
	{
		renderer.material.color.a = 0.0f;
	}
	else {
		renderer.material.color.a = curTime / MAX_TIME;
		curTime -= Time.deltaTime;
		if (curTime <= 0.0f) {
			curTime = MAX_TIME;
			isDisplay = false;
		}
	}
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}