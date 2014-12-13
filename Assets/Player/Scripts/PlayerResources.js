#pragma strict

var money : int;

function Start () {
	money = 2000;
}

function getMoney() : int {
	return money;
}

function addMoney(amount : int) {
	if(amount > 0) money += amount;
}

function reduceMoney(amount : int) {
	if(amount > 0) money -= amount;
}