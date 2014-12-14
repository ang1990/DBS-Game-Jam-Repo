#pragma strict

function Start () {

}

function Update () {
	var hits : RaycastHit[];	
	hits = Physics.RaycastAll(Camera.main.ScreenToWorldPoint(Input.mousePosition + new Vector3(0.0f, 0.0f, -10.0f)), new Vector3(0.0f, 0.0f, 1.0f));
	var nearestName = "";
	var i = 0;
	var nearest = float.MaxValue;
	var nearestObj : GameObject;
	while (i < hits.Length)
	{
	    if (nearest > (hits[i].point - Camera.main.transform.position).magnitude)
	    {
	    	nearestObj = hits[i].collider.gameObject;
	        nearestName = hits[i].transform.name;
	        nearest = (hits[i].point - Camera.main.transform.position).magnitude;
	    }
	    i++;
	}
	
	if (nearestName.Equals("Body")){
		if (nearestObj != null) {
			Debug.Log("DESTROY");
			Destroy(nearestObj);
		}
	}	
}