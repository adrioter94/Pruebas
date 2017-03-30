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
    $.getJSON("frase_random.json", function(words) {
		console.log(words.length);
	// words_global = words;
	// write_sentence();
    });
    //$("#sentence").click(write_sentence);
});
