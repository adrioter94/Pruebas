$(document).ready(function() {
	$.getJSON( "ejemplo.json", function(json) {
		var i = 0;
		for(i = 0; i < json.items.length; i++){
			var ul = document.getElementById("list");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode("History " + i + ": " + json.items[i].title));
			ul.appendChild(li)
			if(typeof json.items[i].location != "undefined"){
				var subul = document.createElement("ul");
				li.appendChild(subul);
				var subli1 = document.createElement("li");
				var subli2 = document.createElement("li");
				subli1.appendChild(document.createTextNode("Latitude: " + json.items[i].location.position.latitude));
				subli2.appendChild(document.createTextNode("Longitude: " + json.items[i].location.position.longitude));
				subul.appendChild(subli1);
				subul.appendChild(subli2);
			}
		}
	});
});
