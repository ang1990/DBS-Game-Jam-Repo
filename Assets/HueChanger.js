#pragma strict

var temperature : Temperature;
var tempPercent :float;
var _sprite : SpriteRenderer;
var initR : float;

function Start () {
	initR = _sprite.color.r;
}

function Update () {
	tempPercent = temperature.getTempPercent();
	Debug.Log(tempPercent);
	_sprite.color.r = (initR*tempPercent);
}