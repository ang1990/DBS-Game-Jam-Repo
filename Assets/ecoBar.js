#pragma strict

private var ecoBar : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;

private var ecosystem : Ecosystem;

function Start () {
	ecoBar = GameObject.Find("ecoBar");
	vertices = ecoBar.GetComponent(MeshFilter).mesh.vertices;
	uv = ecoBar.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	ecosystem = GameObject.Find("Environment").GetComponent(Ecosystem);
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);
	
	// TOP: 1, 3
	// BTM: 0, 2
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
}

function Update () {
	vertices[1].y = MAX_BTM + height * ecosystem.getEcoPercentage();
	vertices[3].y = MAX_BTM + height * ecosystem.getEcoPercentage();

	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}