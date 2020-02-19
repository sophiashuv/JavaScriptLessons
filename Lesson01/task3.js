var user = {};

user.name = "Пилип";
user.surname = "Шевченко";
console.log(user);

user.name = "Сергей";
console.log(user);

delete user.name;
console.log(user);
