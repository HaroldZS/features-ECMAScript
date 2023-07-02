function newUser(name, age, country) {
  var name = name || "Harold";
  var age = age || 24;
  var country = country || "BO";
  console.log(name, age, country);
}

newUser();
newUser("Zurita", 15, "CO");

function newAdmin(name = "Harold", age = 24, country = "BO") {
  console.log(name, age, country);
}

newUser();
newUser("Ana", 28, "PE");
