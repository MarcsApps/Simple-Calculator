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