#pragma strict

private var state : int;
var bullet : GameObject;
var anchor : Transform;

function setState(_state : int) {
	state = _state;
}

function Start () {
	state = 0; //0 - no command, 1 - halt, 2 - attack, 3 - sell
}

function Update () {
	var hits : RaycastHit2D[];	
	hits = Physics2D.RaycastAll(Camera.main.ScreenToWorldPoint(Input.mousePosition + new Vector3(0.0f, 0.0f, -10.0f)), new Vector3(0.0f, 0.0f, 1.0f));
	
	//Debug.Log("STATE " + state);
	
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
	
	if (Input.GetMouseButtonDown(0)) {
		if (nearestTag.Equals("Machine") && state == 3){
			Debug.Log("MACHINE");
			if (nearestObj != null) {
				//Debug.Log("DESTROY " + nearestObj.transform.parent.name);
				if (nearestObj.transform.parent.name.Equals("Miner(Clone)")) {
					Debug.Log("GAIN 375 gold");
					GameObject.Find("Mothersheep").GetComponent(PlayerResources).addMoney(375);
				}
				else if (nearestObj.transform.parent.name.Equals("ColdTempMachine(Clone)")
				|| nearestObj.transform.parent.name.Equals("HotTempMachine(Clone)")) {
					Debug.Log("GAIN 1.2k gold");
					GameObject.Find("Mothersheep").GetComponent(PlayerResources).addMoney(1200);
				}
				else if (nearestObj.transform.parent.name.Equals("EcoMachine(Clone)")) {
					Debug.Log("GAIN 1.5k gold");
					GameObject.Find("Mothersheep").GetComponent(PlayerResources).addMoney(1500);
				}
				Destroy(nearestObj.transform.parent.gameObject);
				Destroy(nearestObj);
			}
		}
		else if (nearestTag.Equals("Disaster") && state == 2){
			//Instantiate(bullet, Vector3.zero, Quaternion.Euler(0,0,anchor.eulerAngles.z));//, Vector3( , , 0.0f));
			Debug.Log("TORNADO");
			Destroy(nearestObj.transform.parent.gameObject);
			Destroy(nearestObj);
		}
	}	
	if (Input.GetMouseButtonDown(1)) {
		state = 0;
	}
}