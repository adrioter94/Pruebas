
$(document).ready(function() {
	var sentence = "";
	$("#btn").click(function(){
		sentence = "";
		$.getJSON("frase_random.json", function(words){
			$.each( words, function( key, value ) {
				selection = Math.floor(Math.random() * value.length);
				sentence += value[selection] + " ";
			});
			$("#sentence").html(sentence);
		});
	});
});
