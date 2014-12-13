#pragma strict

var transformList : List.<Transform>;

var timeSinceLastUpdate : float;
var updateTime : float = 0.025;

var _anchor : Transform;

var oldScale : Vector3;

var selectedObject : GameObject;
var selectedObjectChanged : boolean = false;

function Start() {
	transformList = new List.<Transform>();
	_anchor = transform.parent;
}

function OnTriggerEnter2D(other : Collider2D) {
	transformList.Add(other.transform.parent);
}

function OnTriggerExit2D(other : Collider2D) {
	transformList.Remove(other.transform.parent);
}


function Update() {
	if(Time.timeSinceLevelLoad > timeSinceLastUpdate + updateTime) {
		if (transformList.Count > 0) {
			var smallestDist : float = 360;
			for(var o : Transform in transformList) {
				var diff : float = angleDifference(o.transform.rotation.z);
				if(smallestDist > diff) {
					if(selectedObject != null) {
						undoHighlight();
					}
					selectedObject = o.gameObject;
					smallestDist = diff;
					selectedObjectChanged = true;
				}
			}
		}
		if(selectedObject != null)
		{
			highlightObject();
		}
		timeSinceLastUpdate = Time.timeSinceLevelLoad;
	}
}

function undoHighlight() {
	selectedObject.transform.localScale = oldScale;
}

function highlightObject() {
	if(selectedObjectChanged) {
		oldScale = selectedObject.transform.localScale;
		selectedObjectChanged = false;
	}
	selectedObject.transform.localScale = selectedObject.transform.localScale * 1.1;
}

function angleDifference(angle : float) {
	var difference : float = Mathf.Repeat(angle - _anchor.rotation.z, 360);
	if(difference > 180)
		return 360 - difference;
	else
		return difference;
}

