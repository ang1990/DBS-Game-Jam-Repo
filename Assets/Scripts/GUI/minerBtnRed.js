#pragma strict

private var minerBtnCD : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_LEFT : float;
private var MAX_RIGHT : float;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
private var MAX_ACTIVE : float;

function Test() {
	//gameObject.active = true;
	Debug.Log("dsad");
}

function Start () {
	gameObject.active = false;
	minerBtnCD = GameObject.Find("minerBtnCD");
	vertices = minerBtnCD.GetComponent(MeshFilter).mesh.vertices;
	uv = minerBtnCD.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);

	MAX_ACTIVE = 2.0f;
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
	
	gameObject.active = false;
}

function Update () {
	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}