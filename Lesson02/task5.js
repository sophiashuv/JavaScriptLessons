function filterRange(array, a, b) {
	var newArray = [];
  if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
    	throw "Wrong parameters!";
  }
  try{
  	for (var i = a; i < b; i++) {
  				newArray.push(array[i]);
  		}
    }
  catch (error) {
		console.log(error);
	}
	return newArray;
}

var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterRange(arr, 2, 5));
