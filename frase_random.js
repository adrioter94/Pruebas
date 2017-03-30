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

function generate_sentence(){
	sentence = "";
	$.each( words, function( key, value ) {
			selection = Math.floor(Math.random() * value.length);
			sentence += value[selection] + " ";
		});
	$("sentence").html(sentence)
}

$(document).ready(function() {
	var sentence = "";
	var words;
	$.getJSON("frase_random.json", function(json) {
		words = json;
	});
	$("#btn").click(generate_sentence);
});
