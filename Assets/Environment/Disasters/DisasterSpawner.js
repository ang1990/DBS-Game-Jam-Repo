﻿#pragma strict

var disasters : GameObject[];

var currentDisasters : GameObject[];

function spawnDisaster() {
	Instantiate(disasters[Mathf.CeilToInt(Random.Range(0,disasters.Length)],Vector3.zero, Quaternion.Identity);
}