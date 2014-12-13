#pragma strict

class TreeController extends MachineController {

protected enum TreeState {Growing, Stable, Dying};

var maxSize : float = 1;
var currentSize : float = 0;
var sizeChanged : boolean;
var treeState : TreeState;

function setMachineVars() {
	sizeChanged = true;
	treeState = TreeState.Growing;
}

function operateMachine() {
	if(sizeChanged)
		updateModelSize();
}

function setSize(size : float) {
	sizeChanged = currentSize != size;
	currentSize = size;
	
}

function updateModelSize() {
}

}