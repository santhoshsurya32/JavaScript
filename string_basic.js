let x = "san";
let y = "thosh";
console.log(x + " " + y);

//to print single quotes
console.log("'" + x + "'");

//to print double quotes
console.log('"' + y + "'");

//string literals
console.log(`ghfewhgf""''''!`);

//to use variables in string literals
console.log(`${x} is a nice person`);

//to add quotes in string literals variables
console.log(`${"y"} is a nice person`);

//string and int combination + operator
console.log(1 + "1");
console.log("1" + 1);
console.log("1" + "1");
console.log(1 + 1 + "1");
console.log("1" + 1 + 1);

//- operator
console.log("5" - 5);
console.log(5 - "5");
console.log("a" - 5); // output is nan which means not a number
console.log("m" - "n");

//combination of both + and -
console.log("1" + 2 - "4" + 1);
console.log("-1" - -1 + "1" + "a");
console.log("a" + "-1");
