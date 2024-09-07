// Implicit conversion

let result = "5" - 10;

//falsy/true value 0, null, undifined, ""
let bool = !1;

//Eksplicit Conversion
let num = 100;
// let string = String(num);
let string = num.toString();

let string2 = "200.88";
// let num2 = parseInt(string2); untuk bilangan bulat
let num2 = parseFloat(string2); // untuk bilangan float

let bool2 = Boolean();
console.log(bool2, typeof bool);
