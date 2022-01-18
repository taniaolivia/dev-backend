const multiply = (param1, param2) => {
    return param1 * param2;
}

function say_hello(str){
    console.log(`Hello, ${str}`);
    //console.log("Hello, " + str);
}

function sum(param1, param2){
    return param1 + param2;
}

//module.exports = say_hello
module.exports = { say_hello, sum, multiply };//syntaxe ES5

