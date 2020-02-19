var employeeSalaries = {
		s1: 18000,
		s2: 66000,
		s3: 13000,
		s4: 15000,
		s5: 50000,
    s6: 17000,
    s7: 20000,
};

var sum = 0;
for (var salary in employeeSalaries) {
	sum += employeeSalaries[salary];
}

console.log("Sum of all saleries is " + sum);
