#pragma strict

private var commandSell : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
    
function Start () {
	commandSell = GameObject.Find("commandSell");
	vertices = commandSell.GetComponent(MeshFilter).mesh.vertices;
	uv = commandSell.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);

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
	var hits : RaycastHit[];
	hits = Physics.RaycastAll(GameObject.Find("GUICam").camera.ScreenToWorldPoint(Input.mousePosition + new Vector3(0.0f, 0.0f, -10.0f)), new Vector3(0.0f, 0.0f, 1.0f));

	var nearestName = "";
	var i = 0;
	var nearest = float.MaxValue;
	while (i < hits.Length)
	{
	    if (nearest > (hits[i].point - Camera.main.transform.position).magnitude)
	    {
	        nearestName = hits[i].transform.name;
	        nearest = (hits[i].point - Camera.main.transform.position).magnitude;
	    }
	    i++;
	}
	
	if (nearestName.Equals(transform.name) && Input.GetMouseButtonDown(0)) {
		Debug.Log("Clicked sell");
	}
	
	vertices[1].y = MAX_BTM + height * 1.0f;
	vertices[3].y = MAX_BTM + height * 1.0f;

	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}