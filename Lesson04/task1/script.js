function fill() {
	var elements = document.querySelectorAll("li");

	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "Unordered list num: " + (i + 1);
	}

	var numberOfItems = elements.length;
	alert("Number of list elements = " + numberOfItems);
}
