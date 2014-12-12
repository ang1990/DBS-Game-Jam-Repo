#pragma strict

private var tempBtnFront : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_LEFT : float;
private var MAX_RIGHT : float;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
    
function Start () {
	tempBtnFront = GameObject.Find("tempBtnFront");
	vertices = tempBtnFront.GetComponent(MeshFilter).mesh.vertices;
	uv = tempBtnFront.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	vertices[0] = transform.TransformPoint(vertices[0]);
	vertices[1] = transform.TransformPoint(vertices[1]);
	vertices[2] = transform.TransformPoint(vertices[2]);
	vertices[3] = transform.TransformPoint(vertices[3]);
	
	vertices[0] = new Vector3(vertices[0].x * Cam.camera.aspect, vertices[0].y, 0);
	vertices[1] = new Vector3(vertices[1].x * Cam.camera.aspect, vertices[1].y, 0);
	vertices[2] = new Vector3(vertices[2].x * Cam.camera.aspect, vertices[2].y, 0);
	vertices[3] = new Vector3(vertices[3].x * Cam.camera.aspect, vertices[3].y, 0);

	vertices[0] = transform.InverseTransformPoint(vertices[0]);
	vertices[1] = transform.InverseTransformPoint(vertices[1]);
	vertices[2] = transform.InverseTransformPoint(vertices[2]);
	vertices[3] = transform.InverseTransformPoint(vertices[3]);

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
	// Raycast
	
	
	
	vertices[1].y = MAX_BTM + height * 1.0f;// playerControl.GetHpRatio();
	vertices[3].y = MAX_BTM + height * 1.0f;// playerControl.GetHpRatio();

	uv[1].y = 1.0f;// playerControl.GetHpRatio();
	uv[3].y = 1.0f;// playerControl.GetHpRatio();
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}