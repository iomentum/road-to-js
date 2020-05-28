

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