// function write_sentence () {
    // var sentence = [];
    //I cannot just iterate, with $.each, over words_global,
    //because object is unordered
    // $.each( ["start", "middle", "end"], function (key, val) {
	// var list = words_global[val];
	// console.log (list);
	// selection = Math.floor(Math.random() * list.length);
	// sentence.push(list[selection])
	// console.log (sentence);
    // });
    // $('#sentence').html(sentence.join(' '));
// };

$(document).ready(function() {
	var sentence = "";
	$.getJSON("frase_random.json", function(words) {
		$.each( words, function( key, value ) {
			selection = Math.floor(Math.random() * value.length);
			sentence += value[selection] + " ";
		});
	});
	
	$("#btn").click(function(){
		$('#sentence').html(sentence);
	});
});
