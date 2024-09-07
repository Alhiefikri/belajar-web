/* Strings di javascript */

// membuat strings
// let singleQuote = "Hello";
// let doubleQoute = "World";
// let backtics = `Hello World`;

// mengakses karakter di dalam string
// let str = "Javascript";
// console.log(str[0]);

// // property dan methods di dalam string

// console.log(str.length); // mengetahui panjang string

// console.log(str.toUpperCase()); // Merubah string ke uppercase

// console.log(str.toLowerCase()); // Merubah string ke lowercase

// let testTrim = "          javascript trim         ";
// console.log(testTrim.trim());

// Manipulasi String

// concat
// let firstnName = "alhie";
// let lastname = "fikri";
// let result = firstnName + " " + lastname;
// console.log(result);

// concat template literals

// let resultBactics = `${firstnName} ${lastname}`;
// console.log(resultBactics);

// mengambil bagian dari string

// let text = "Javascript";
// console.log(text.slice(0, 4));
// console.log(text.substring(4));

// // Mengganti bagian dari string
// let replacement = "Hello, World";
// let newReplacement = replacement.replace("World", "There");
// console.log(newReplacement);

// const arr = ["test", "array", "di", "string"];
// console.log(arr.join("-"));

// const testString = "text-array-di-string";

// console.log(testString.split("-"));

// console.log(testString.split("-", 4));

// Pencarian di dalam string

//indexOf,
// let sentence =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime minus culpa amet dignissimos veritatis adipisci quis assumenda, unde inventore consectetur?";
// let index = sentence.indexOf("dolor");
// console.log(index);
// let lastIndex = sentence.lastIndexOf("dolor");
// console.log(lastIndex);

// let exists = sentence.includes("dolor");
// console.log(exists);

// Challenge
const stringAsli = "javascript";
// let ind = stringAsli[0];
let upper = stringAsli[0].toUpperCase();
console.log(upper);
