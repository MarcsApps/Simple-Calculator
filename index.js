window.onload = init;

flag = false;


var Calculator = function() {
	Calculator.prototype.getInput = function () {
		if (flag) {
			clearDisplayBox();
		}
		flag = false;
		setDisplay(this.innerHTML);
	}
	
	function setDisplay(val) {
		if (val.match("=")) {
			var displayBoxInput = parser.getDisplayBoxInput();
			var parts = parser.parseValue (displayBoxValue);
			operateOnInput(getInputArray());
			flag = true;
			return;
		}
		if (val.match("Clear")) {
			clearDisplayBox();
			return;
		}
		var displayBox = document.getElementById("display_box");
		displayBox.value += val + " ";
	}
	
	function operateOnInput (inputArray) {
		var sum = 0, a, b;
		if (parser.parseValue(inputArray)) {
			
			return;
		};
		clearDisplayBox();
		setDisplay(add(parts[0], parts[2]) + "");
		flag = true;
		return;
	}
	
	function getInputArray (){
		var displayBoxValue = document.getElementById("display_box").value;
		var parts = displayBoxValue.split(" ");
		console.log(parts);
		return parts;
	}
	
	function clearDisplayBox () {
		var displayBox = document.getElementById("display_box");
		displayBox.value = "";
	}
	
	function add(x,y) {
		return parseInt(x)+ parseInt(y);
	}
	
	function subtract (x,y) {
		return parseInt(x) - parseInt(y);
	}
	
}
var calc = new Calculator();

function init() {
	attachEventListener();
}

function attachEventListener() {
	var buttons = document.querySelectorAll("#btn");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", calc.getInput);
	}
}



