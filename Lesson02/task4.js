var array = [ -1, -5, 67, 56, -53, 8, 4, -3, -47, -88, 67, -45,
  -90, 33, 68, 1, -4, -88, 107, 61, -6 ];

function compareNumeric(a, b) {
	return a - b;
}

array.sort(compareNumeric);
console.log(array);
console.log(array.reverse());

function isPositive(number) {
	return number>=0;
}

function isNegative(number) {
	return number<0;
}

console.log(array.filter(isPositive));
console.log(array.filter(isNegative));
