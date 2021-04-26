function helloWorld() {
    const helloWorld = "Hello World !"

    console.log(helloWorld)
}

helloWorld();

const GreaterThanFive = (number) => {
    if (number > 5) {
        return true;
    } else {
        return false;
    }
}

console.log(GreaterThanFive(6));


const numberBetweenFiveAndFifteen = (number) => {
    if (number > 5) {
        if(number < 15) {
            return true;
        }
        return false;
    } 
    return false;
}

console.log(numberBetweenFiveAndFifteen(17));

function countToNumber(max) {
    for (let i = 0; i <= max; i++) {
        if (i <= 20) {
            console.log(`sous 20, ${i}`);
        } else {
            console.log(`au dessus de 20, ${i}`);
        }
    }
}

countToNumber(60);

function divisibleByThree(n) {
    if (n % 3 === 0) {
        return true;
    } else {
        return false;
    }
}


function divisibleByFive(n) {
    if (n % 5 === 0) {
        return true;
    } else {
        return false;
    }
}


function divisibleByFifteen(n) {
    if (n % 15 === 0) {
        return true;
    } else {
        return false;
    }
}

function fizzBuzz(max) {
    let response = "";

    for (let i = 0; i <= max; i++) {
        if (i === 0) {
            response += i;
        } else if (divisibleByFifteen(i)) {
            response += ", fizzbuzz";
        } else if (divisibleByFive(i)) {
            response += ", fizz";
        } else if (divisibleByThree(i)) {
            response += ", fibo";
        } else {
            response += ", " + i;
        }
    }
    return response
}

console.log(fizzBuzz(56));
