// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//

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
	$.getJSON( "ejemplo.json", function(json) {
		console.log("Hola3");
		console.log( "JSON Data: " + json.items.length);
		var i = 0;
		for(i = 0; i <= json.items.length; i++){
			var ul = document.getElementById("list");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode("History " + i + ": " + json.items.title));
			ul.appendChild(li)
			var subul = document.createElement("ul");
			var subli1 = document.createElement("li");
			var subli2 = document.createElement("li");
			subli1.appendChild(document.createTextNode("Latitude: " + json.items.location.position.latitude);
			subli2.appendChild(document.createTextNode("Longitude: " + json.items.location.position.longitude);
			subul.appendChild(subli1);
			subul.appendChild(subli2);
		}
	});
});
