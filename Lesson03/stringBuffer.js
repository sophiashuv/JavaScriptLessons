function makeBuffer() {
	var string = '';

	return {
		add : function(value) {
			string = string + " " + value;
		},
		print : function() {
			return string ;
		},
		clear : function() {
			string = "";
		}
	}
}

var buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');
console.log(buffer.print());
var buffer = makeBuffer ();
buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print()); // '010'
buffer.clear();
buffer.add("Тест");
buffer.add("тебе не з'їсть");
console.log(buffer.print());
