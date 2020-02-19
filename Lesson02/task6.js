function camelize(string) {
	stringToWords = string.split("_");
  for (i = 1; i < stringToWords.length; i++) {
		stringToWords[i] = stringToWords[i][0].toUpperCase() + stringToWords[i].slice(1);
	}
	console.log(stringToWords.join(""));
}
camelize("my_short_string");
