const array = [1, 2, 3, 4, 5, 6],
  resultNumbers = [];

// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

for (let numerosSort of array) {
  // generating a random number
  numerosSort = Math.floor(Math.random() * (max - min + 1) + min);
  resultNumbers.push(numerosSort);
}

console.log(array.join(", "));

// display a random number
console.log(
  `Random value between ${min} and ${max} is ${resultNumbers.join(", ")}`
);

document.getElementById("demo").innerHTML = resultNumbers.join(", ");
