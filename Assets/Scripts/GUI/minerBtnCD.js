﻿#pragma strict

private var minerBtnCD : GameObject;
private var vertices : Vector3[];
private var uv : Vector2[];
private var Cam : GameObject;
private var MAX_TOP : float;
private var MAX_BTM : float;
private var height : float;
private var MAX_CD : float;
private var curCD : float;
private var isOnCD : boolean;

function SetOnCD() {
	isOnCD = true;
	if (curCD == 0.0f) {
		curCD = MAX_CD;
	}
}

function GetOnCD() {
	return isOnCD;
}

function Start () {
	minerBtnCD = GameObject.Find("minerBtnCD");
	vertices = minerBtnCD.GetComponent(MeshFilter).mesh.vertices;
	uv = minerBtnCD.GetComponent(MeshFilter).mesh.uv;
	Cam = GameObject.Find("GUICam");
	
	transform.position = new Vector3(transform.position.x * Cam.camera.aspect, transform.position.y, transform.position.z);
    transform.localScale = new Vector3(transform.localScale.x * Cam.camera.aspect, transform.localScale.y, transform.localScale.z);
	
	MAX_TOP = vertices[1].y;
	MAX_BTM = vertices[0].y;

	height = Mathf.Abs(MAX_TOP - MAX_BTM);
	
	MAX_CD = 5.0f;
	curCD = 0.0f;
	isOnCD = false;
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
	
	if (isOnCD) {
		curCD -= Time.deltaTime;
		if (curCD <= 0.0f) {
			isOnCD = false;
			curCD = 0.0f;
		}
	}
		
	vertices[1].y = MAX_BTM + height * curCD / MAX_CD;
	vertices[3].y = MAX_BTM + height * curCD / MAX_CD;

	uv[1].y = 1.0f;
	uv[3].y = 1.0f;
	
	GetComponent(MeshFilter).mesh.vertices = vertices;
	GetComponent(MeshFilter).mesh.uv = uv;
}