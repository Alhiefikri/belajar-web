const person = {
  firstName: "Alhie",
  lastName: "Fikri",
};

// Object.freeze(person);
Object.seal(person);

person.firstName = "Budi";
person.middleName = "Kurniawan";
delete person.lastName;

console.info(person);
