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

function generate_sentence(obj){
	sentence = "";
	$.each( obj, function( key, value ) {
			selection = Math.floor(Math.random() * value.length);
			sentence += value[selection] + " ";
		});
	$("sentence").html(sentence)
}

$(document).ready(function() {
	var sentence = "";
	var some = 2;
	$.getJSON("frase_random.json", function(words)){
		console.log(some);
	
	});
	console.log(words);
	$("#btn").click(function(){
		generate_sentence(words);
	});
});
