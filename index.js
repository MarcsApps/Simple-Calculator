window.onload = init;

flag = false;

var Parser = function () {
	Parser.prototype.parseValue = function (val) {
		var parts = val.split(" ");
		return parts;
	}
	
	Parser.prototype.getDisplayBoxInput = function() {
		displayBoxValue = document.getElementById("display_box").value;
		return displayBoxValue;
	}
}
var parser = new Parser();
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
			console.log(parts);
			console.log(add(parts));
			clearDisplayBox();
			setDisplay(add(parts[0], parts[2]) + "");
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
	
	function clearDisplayBox () {
		var displayBox = document.getElementById("display_box");
		displayBox.value = "";
	}
	
	function add(x,y) {
		return parseInt(x)+ parseInt(y);
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



