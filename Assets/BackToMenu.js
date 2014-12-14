#pragma strict

function Start () {
	yield WaitForSeconds(7);
	Application.LoadLevel("MainMenu");
}