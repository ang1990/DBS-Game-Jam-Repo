#pragma strict
var imageRatio : float;
var image : GUITexture;

function Start () {
	imageRatio = 25/15;
	image.pixelInset.height = 0.9*Screen.height;
	image.pixelInset.width = imageRatio * image.pixelInset.height;
}

function Update () {

}