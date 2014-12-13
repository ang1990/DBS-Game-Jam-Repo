#pragma strict

private var digit4 : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
    
function Start () {
	digit4 = GameObject.Find("digit4");
	vertices = digit4.GetComponent(MeshFilter).mesh.vertices;
	uv = digit4.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);
	// TOP: 1, 3
	// BTM: 0, 2
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
}

function Update () {
	var num = 782345;
	
	vertices[1].y = MAX_BTM + height * 1.0f;
	vertices[3].y = MAX_BTM + height * 1.0f;

	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
	
	Debug.Log(num.ToString().Length);
	if (num.ToString().Length >= 5)
	{
		renderer.material.mainTexture = Resources.Load("GUI/Textures/numbers/" + num.ToString()[num.ToString().Length - 5], typeof(Texture2D)) as Texture;		
	}
	else {
		// Set all vertices to 0
		vertices[0].Set(0.0f, 0.0f, 0.0f);
		vertices[1].Set(0.0f, 0.0f, 0.0f);
		vertices[2].Set(0.0f, 0.0f, 0.0f);
		vertices[3].Set(0.0f, 0.0f, 0.0f);
	}
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}