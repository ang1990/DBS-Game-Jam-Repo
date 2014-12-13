#pragma strict


var objectList : List.<GameObject>;

var timeSinceLastUpdate : float;
var updateTime : float = 0.025;

var _anchor = Transform;

var selectedObject : GameObject;

function Start() {
	objectList = new List.<GameObject>();
	_anchor = transform.parent;
}

function OnTriggerEnter2D(other : Collider2D) {
	objectList.Add(other.gameObject.parent);
}

function OnTriggerExit2D(other : Collider2D) {
	objectList.Remove(other.gameObject.parent);
}


function Update() {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		if (objectList.Length > 0) {
			var smallestDist : float = 360;
			for(var o : GameObject in objectList) {
				var diff : float = angleDifference(o.transform.rotation.z);
				if(smallestDist > diff) {
					selectedObject = o;
					smallestDist = diff;
				}
			}
		}
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}
}

function angleDifference(angle : float) {
	var difference : float = Mathf.Repeat(angle - _anchor.rotation.z, 360);
	if(difference > 180)
		return 360 - difference;
	else
		return difference;
}

