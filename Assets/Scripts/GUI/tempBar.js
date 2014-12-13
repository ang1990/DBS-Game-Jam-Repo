#pragma strict

private var tempBar : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_LEFT : float;
private var MAX_RIGHT : float;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
   
private var temp : Temperature;
function Start () {
	tempBar = GameObject.Find("tempBar");
	vertices = tempBar.GetComponent(MeshFilter).mesh.vertices;
	uv = tempBar.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);

	temp = GameObject.Find("Environment").GetComponent(Temperature);

	//Debug.Log(vertices[0].y + " " + vertices[1].y + " " + vertices[2].y + " " + vertices[3].y);
	//MAX_LEFT = vertices[0].x;
	//MAX_RIGHT = vertices[1].x;
	
	// TOP: 1, 3
	// BTM: 0, 2
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
}

function Update () {
	vertices[1].y = MAX_BTM + height * temp.getTempPercent();
	vertices[3].y = MAX_BTM + height * temp.getTempPercent();

	uv[1].y = 1.0f;// playerControl.GetHpRatio();
	uv[3].y = 1.0f;// playerControl.GetHpRatio();
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}