function makeRed() {
	var el = document.querySelectorAll("li>a");

	for (var i = 0; i < el.length; i++) {
		if (el[i].innerHTML.includes("http://") || el[i].innerHTML.includes("ftp://")) {
			el[i].style.backgroundColor = "#FF6347";
		}
	}
}
