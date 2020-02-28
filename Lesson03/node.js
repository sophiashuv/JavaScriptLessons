function Robot() {
	this.name;
	this.action;

	this.construct = function Robot(name, action) {
		this.name = name;
		this.action = action;
	}
  this.construct("Robot", "просто працюю");

	this.work = function work() {
		return "Я " + this.name + " - я " + this.action + "!";
	}
}

function CoffeeRobot() {
	Robot.call(this);
	this.construct("CoffeeRobot", "просто варю каву");
}

function RobotCooker() {
	Robot.call(this);
	this.construct("RobotCooker", "просто готую");
}

function RobotDanser() {
	Robot.call(this);
	this.construct("RobotDanser", "просто танцюю");
}

var robot = new Robot();
var coffeeRobot = new CoffeeRobot();
var robotDanser = new RobotDanser();
var robotCooker = new RobotCooker();

console.log(robot.work());
console.log(coffeeRobot.work());
console.log(robotDanser.work());
console.log(robotCooker.work());

console.log();

var arr = [];
arr[0] = robot;
arr[1] = coffeeRobot;
arr[2] = robotDanser;
arr[3] = robotCooker;

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i].work());
}
