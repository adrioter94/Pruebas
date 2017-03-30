
$(document).ready(function() {
	var sentence = "";
	$("#btn").click(function(){
		sentence = "";
		$.getJSON("frase_random.json", function(words){
			$.each( words, function( key, value ) {
				selection = Math.floor(Math.random() * value.length);
				sentence += value[selection] + " ";
				console.log("1.-" + sentence);
			});
			console.log("2.-" + sentence);
			$("sentence").html(sentence);
		});
	});
});
