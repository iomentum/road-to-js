

// 3 fizz
// 5 buzz
// 15 fizzbuzz

console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 1);
console.log(2 / 2);
console.log(9 % 3);
console.log(10 % 5);


const agePersonne1 = 20;
const agePersonne2 = 21;
const agePersonne3 = 22;
const agePersonne4 = 23;

const isAdult = (age) => {
    return age >= 18;
}

const agePersonnes = [agePersonne1, agePersonne2, agePersonne3, agePersonne4];

for (i = 1; i < agePersonnes.length; i++) {
    console.log(agePersonnes[i]);
}

for (agePersonne of agePersonnes) {
    console.log(agePersonne);
}

for (index in agePersonnes) {
    console.log(agePersonnes[index]);
}

// ---------------------------------------------

// fizzBuzz(100) => compter de 0 a 100 et afficher le nombre // boucle
// 3 fizz // condition
// 5 buzz // condition
// 15 fizzbuzz // condition


const divisibleByThree = (n) => n % 3 === 0;
const divisibleByFive = (n) => n % 5 === 0;
const divisibleByFifteen = (n) => n % 15 === 0;

// fonction qui compte et ecrit fizz / buzz / fizzbuzz et les nombres
const fizzBuzz = (max) => {
    let response = "";
    // compte
    for (let i = 0; i <= max; i++) {
        if (i === 0) {
            response += i;
        } else if (divisibleByFifteen(i)) {
            response += ",fizzbuzz";
        } else if (divisibleByFive(i)) {
            response += ",buzz";
        } else if (divisibleByThree(i)) {
            response += ",fizz";
        } else {
            response += "," + i;
        }
    }
    return response;
};

const testFizzBuzz = (expected, max) => {
    const actual = fizzBuzz(max);
    if (expected !== actual) {
        console.log(`expected \n ${expected} \nfound \n${actual} \n`);
        process.exit();
    } else {
        console.log("passed");
    }
}

// Setup
let max = 1;
let expected = "0,1";

testFizzBuzz(expected, max);

max = 2;
expected = "0,1,2";
testFizzBuzz(expected, max);

max = 0;
expected = "0";
testFizzBuzz(expected, max);

max = 3;
expected = "0,1,2,fizz";
testFizzBuzz(expected, max);

max = 5;
expected = "0,1,2,fizz,4,buzz";
testFizzBuzz(expected, max);

max = 15;
expected = "0,1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz";
testFizzBuzz(expected, max);


// remove divisibleByFifteen
// create a variant that will match any divisible and reply with any word

// testMyFizzBuzz([[2, "toto"], [3, "tata"]], 5, "0,1,toto,tata,toto,5");
