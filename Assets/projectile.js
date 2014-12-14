#pragma strict

class projectile extends MachineController {


function setMachineVars() {
	//temperature = GameObject.Find("Environment").GetComponent(Temperature);
}

function deploy () {
	transform.localPosition.y -= (deployTravelDist / deployTime * (Time.timeSinceLevelLoad - timeSinceLastUpdate));
}


}