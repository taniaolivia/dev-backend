const { say_hello, sum, multiply } = require("./utils/hello");//syntaxe ES5
const Robot = require("./classes/Robot");//syntaxe ES5


say_hello("World");


const total = sum(1, 1);
console.log(total);


const result = multiply(3, 5);
console.log(result);


const nono = new Robot("123", "red");
console.log(nono.who_am_i());