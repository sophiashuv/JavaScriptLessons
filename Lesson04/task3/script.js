
menu.onclick = function () {
	var elements = document.querySelectorAll("a.active");
	var visibility = elements[0].style.visibility;

	for (var i = 0; i < elements.length; i++) {
		if (visibility == "hidden") {
			elements[i].style.visibility = "";
		} else {
			elements[i].style.visibility = "hidden";
		}
	}
}
