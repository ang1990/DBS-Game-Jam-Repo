#pragma strict

private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
   
 var num : int = 0;
   
function Start () {
	vertices = gameObject.GetComponent(MeshFilter).mesh.vertices;
	uv = gameObject.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);
	// TOP: 1, 3
	// BTM: 0, 2
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
	setNumber(0);
}

function setNumber(val : int) {
	var num = val;
	
	vertices[1].y = MAX_BTM + height * 1.0f;
	vertices[3].y = MAX_BTM + height * 1.0f;

	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
	
	if(val < 0) {
		// Set all vertices to 0
		vertices[0].Set(0.0f, 0.0f, 0.0f);
		vertices[1].Set(0.0f, 0.0f, 0.0f);
		vertices[2].Set(0.0f, 0.0f, 0.0f);
		vertices[3].Set(0.0f, 0.0f, 0.0f);
	}
	else
		renderer.material.mainTexture = Resources.Load("GUI/Textures/numbers/" + num.ToString(), typeof(Texture2D)) as Texture;
	/*if (num.ToString().Length >= 0)
	{
			
	}
	else {
		// Set all vertices to 0
		vertices[0].Set(0.0f, 0.0f, 0.0f);
		vertices[1].Set(0.0f, 0.0f, 0.0f);
		vertices[2].Set(0.0f, 0.0f, 0.0f);
		vertices[3].Set(0.0f, 0.0f, 0.0f);
	}*/
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}