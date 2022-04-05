/**************************
          OPPGAVE 1
***************************/

// Lager et tomt array
const numberArray = [];

// Legger til tall i arrayet med en for loop
for (let i = 1; i <= 7; i++) {
  numberArray.push(i);
}

// Logger ut elementene i arrayet til konsollen
for (let i = 0; i < numberArray.length; i++) {
  // console.log(numberArray[i]);
}

/**************************
          OPPGAVE 2
***************************/

numberArray.push(8); // legger til et element i enden av arrayet
// console.log(numberArray);

numberArray.unshift(0); // legger til et element i starten av arrayet
// console.log(numberArray);

numberArray.pop(); // fjerner et element i enden av arrayet
// console.log(numberArray);

numberArray.shift(); // fjerner et element i starten av arrayet
// console.log(numberArray);

// console.log(numberArray[3]); // hente et enkelt element på indeks 3

numberArray.splice(numberArray.length, 0, 8); // legge til element med splice
// console.log(numberArray);

numberArray.splice(numberArray.length - 1, 1); // fjerne et element med splice
// console.log(numberArray);

numberArray.forEach((number, index) => {
  // console.log(`Element ${number} at index ${index}`);
});

for (let i = 0; i < numberArray.length; i++) {
  // console.log(`Element ${numberArray[i]} at index ${i}`);
}

/**************************
          OPPGAVE 3
***************************/

var winningNumbers = [1, 76, 2, 78, 16, 7];
// console.log(winningNumbers[2]); // Logger tredje element (med indeks 2) til konsollen

/**************************
          OPPGAVE 4
***************************/

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("carrot");
// console.log(vegetables); // [ 'rice', 'potatoes', 'porridge', 'cake', 'spinach', 'carrot' ]

/**************************
          OPPGAVE 5
***************************/

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (let i = 0; i < randomThings.length; i++) {
  // console.log(randomThings[i]);
}

// Alternativt
// randomThings.forEach((thing) => console.log(thing));

/**************************
          OPPGAVE 6
***************************/

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (let i = 0; i < moreThings.length; i++) {
  // if (typeof moreThings[i] === "number") console.log(moreThings[i]);
}

// Alternativt
moreThings.forEach((thing) => {
  // if (typeof thing === "number") console.log(thing);
});

/**************************
          OPPGAVE 7
***************************/

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

// Sorter elementene i arrayet i alfabetisk rekkefølge
ingredients.sort();

for (let i = 0; i < ingredients.length; i++) {
  // console.log(ingredients[i]);
}

// Alternativt
ingredients.sort();
// ingredients.forEach((ingredient) => console.log(ingredient));

/**************************
          OPPGAVE 8
***************************/

var characters = [
  "Gob",
  "Michael",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];

for (let i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    // console.log(characters[i]);
  }
}

// Alternativt
characters.forEach((character, index) => {
  if (index % 2 === 1) {
    // console.log(character);
  }
});

/**************************
     Bonus: sort-metoden
***************************/

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
// console.log(numbers); // [ 1, 2, 3, 4, 5 ]
