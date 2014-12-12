
var overviewCam : GameObject;
var groundCam : GameObject;
var resourceCam : GameObject;

var cameras : GameObject[];
var currentIndex : int;

var fadeTime = 2.0;
var curve : AnimationCurve;
private var inProgress = false;
private var swap = false;
 
function Start() {
	cameras[0] = overviewCam;
	cameras[1] = groundCam;
	cameras[2] = resourceCam;
	for(var cam : GameObject in cameras) {
		cam.camera.active = cam == overviewCam ? true : false;
	}
}
 
function changeView(c : GameObject) {
	for(var cam : GameObject in cameras) {
		cam.camera.active = cam == c ? true : false;
	}
}
 // Test function. Press space to switch between views.

function Update () {
	if (Input.GetKeyDown("space")) {
		currentIndex++;
		currentIndex = currentIndex%cameras.Length;
	for(var i : int = 0; i < cameras.Length; i++)
	{
		if(i == currentIndex) {
			cameras[i].camera.active = true;
		}
		else cameras[i].camera.active = false;
	}
	}
}