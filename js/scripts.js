$(document).ready(function(){
	var value = $("#value").val("0");
	console.log(value); //Make sure value is correct when button is pressed
	$(".calc_button #one").on("clicked", function() {
		$("#value").val("1");
	});
});