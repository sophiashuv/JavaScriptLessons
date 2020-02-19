var login;
var password;

login = "Admin";
password = "TheMaster";

switch (login) {
  case "Admin":
    switch (password) {
      case "TheMaster":
        console.log("Welcome");
        break;
      case "Canceled":
        console.log("Canceled");
        break;
      default:
      console.log("Wrong password");
    }
    break;
  case "Other":
    console.log("I don't know you");
    break;
  default:
    console.log("Canceled");
}
