function calculator(a, operator, b) {
	console.log(a + " " + operator + " " + b + " = ");

	var result = "";
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Not a Number!";
    }else{
			switch (operator) {
				case ("+"): {
					console.log(a + b);
					break;
				}
				case ("-"): {
					console.log(a - b);
					break;
				}
				case ("*"): {
					console.log(a * b);
					break;
				}
				case ("/"): {
					if (b == 0) {
						throw "Zero devision!";
					} else {
						console.log(a / b);
						break;
					}
				}
        default:{
          throw "Wrong operator!";
        }
			}
    }

	} catch (error) {
		console.log(error);
	}
}

var a = 100;
var b = 3;

calculator(a, "+", b);
calculator(a, "-", b);
calculator(a, "*", b);
calculator(a, "/", b);
calculator("a", "+", b);
calculator(a, "/", 0);
calculator(a, "fdghj", b);
