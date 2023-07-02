// enhancement object literals

function newUser(user, age, country, uId) {
  //   return {
  //     user: user,
  //     age: age,
  //     country: country,
  //   };

  return { user, age, country, id: uId };
}

console.log(newUser("Harold", 24, "BO", 1));
