let miles = 24;
let kilometers = 40;
let number = 1.609344;
let kilometersToMiles = kilometers / number;
let milesToKilometers = miles * number;
let celsius = 5;
let fahrenheit = 41;
let celsiusToFahrenheit = (celsius * 9 / 5) + 32;
let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log("Distance conversions");
console.log("-----------------------");
console.log("40 kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log("24 miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");
console.log("Temperature conversions");
console.log("-----------------------");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
console.log("----");
console.log(fahrenheitToCelsius + " degrees Celsius are:");
console.log(fahrenheit + " degrees Fahrenheit");
