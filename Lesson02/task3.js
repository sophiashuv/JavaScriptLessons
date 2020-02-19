function find(arr, value) {
	return arr.indexOf(value);
}

var styles = [ "Джаз", "Блюз", "Рок-н-ролл", "Класика"];
console.log(styles);
for(var i = 0; i < styles.length; i++){
  console.log(styles[i] + " - " + find(styles, styles[i]));
}
