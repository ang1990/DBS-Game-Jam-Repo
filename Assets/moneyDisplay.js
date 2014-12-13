#pragma strict

class moneyDisplay extends goldDigit {
	var numArray : goldDigit[];
	var a : int;
	var playerResources : PlayerResources;

	function Start () {
		playerResources = GameObject.Find("Mothersheep").GetComponent(PlayerResources);
	}

	function Update() {
		setNumber(playerResources.getMoney());
	}

	function setNumber(no : int) {
		var dispNumber = no;
		for (var i : int = 0; i < numArray.Length; i++) {
			//numArray[i] = new goldDigit();
			numArray[i].setNumber(dispNumber%10);
			dispNumber /= 10;
		}
	}
}