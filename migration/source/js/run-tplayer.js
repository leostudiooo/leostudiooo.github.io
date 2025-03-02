document.addEventListener("DOMContentLoaded", function() {
	let tpContainer = document.createElement("div");
	tpContainer.id = "tplayer";
	document.body.append(tpContainer);
	tplayer.createPlayer(document.getElementById("tplayer"),"6630417901",true);
});