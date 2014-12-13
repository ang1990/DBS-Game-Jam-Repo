#pragma strict

private var tempIndicator : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
   
private var posY : float;
private var temp : Temperature;

function SetHeight(_posY : float) {
	posY = _posY;
}

function Start () {
	tempIndicator = GameObject.Find("tempIndicator");
	vertices = tempIndicator.GetComponent(MeshFilter).mesh.vertices;
	uv = tempIndicator.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);
	
	temp = GameObject.Find("Environment").GetComponent(Temperature);
	// TOP: 1, 3
	// BTM: 0, 2
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
}

function Update () {
	vertices[1].y = MAX_BTM + height * posY + 0.2f;
	vertices[3].y = MAX_BTM + height * posY + 0.2f;
	
	vertices[0].y = MAX_BTM + height * posY - 0.2f;
	vertices[2].y = MAX_BTM + height * posY - 0.2f;

	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
		
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}