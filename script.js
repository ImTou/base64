function encode() {
	var input = document.getElementById("input-text").value;
	var output = btoa(input);
	document.getElementById("output-text").value = output;
}

function decode() {
	var input = document.getElementById("input-text").value;
	var output = atob(input);
	document.getElementById("output-text").value = output;
}
