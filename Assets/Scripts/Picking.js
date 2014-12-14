#pragma strict

private var state : int;

function setState(_state : int) {
	state = _state;
}

function Start () {
	state = 0; //0 - no command, 1 - halt, 2 - attack, 3 - sell
}

function Update () {
	var hits : RaycastHit2D[];	
	hits = Physics2D.RaycastAll(Camera.main.ScreenToWorldPoint(Input.mousePosition + new Vector3(0.0f, 0.0f, -10.0f)), new Vector3(0.0f, 0.0f, 1.0f));
	
	Debug.Log("STATE " + state);
	
	var i = 0;
	var nearest = float.MaxValue;
	var nearestObj : GameObject;
	var nearestTag = "";
	while (i < hits.Length)
	{
	    if (nearest > (hits[i].point - Camera.main.transform.position).magnitude)
	    {
	    	nearestObj = hits[i].collider.gameObject;
	        nearestTag = hits[i].transform.tag;
	        nearest = (hits[i].point - Camera.main.transform.position).magnitude;
	    }
	    i++;
	}
	
	if (Input.GetMouseButtonDown(0) && state == 1) {
		if (nearestTag.Equals("Machine")){
			//Debug.Log("MACHINE");
			if (nearestObj != null) {
				//Debug.Log("DESTROY");
				Destroy(nearestObj.transform.parent.gameObject);
				Destroy(nearestObj);
			}
		}
	}	
	if (Input.GetMouseButtonDown(1)) {
		state = 0;
	}
}