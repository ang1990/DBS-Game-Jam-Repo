#pragma strict

var tempDeltaRate : float = 25;
var ecoDeltaRate : float = 50;
var popDeltaRate : float  = 50;

var env : GameObject;
var temperature : Temperature;
var ecosystem : Ecosystem;
var population : Population;

function Start() {
	env = GameObject.Find("Environment");
	temperature = env.GetComponent(Temperature);
	ecosystem = env.GetComponent(Ecosystem);
	population = env.GetComponent(Population);
}

function Update () {
	if(Input.GetKey("up")) {
		temperature.addTemp(tempDeltaRate*Time.deltaTime);
		Debug.Log("Temperature = " + temperature.getTemp());
	}
	else if(Input.GetKey("down")) {
		temperature.reduceTemp(tempDeltaRate*Time.deltaTime);
		Debug.Log("Temperature = " + temperature.getTemp());
	}
	if(Input.GetKey("p")) {
		population.addPop(popDeltaRate*Time.deltaTime);
	}
	
}