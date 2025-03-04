// https://api.chucknorris.io/jokes/random

fetch("https://api.chucknorris.io/jokes/random")
  .then((resp) => resp.json())
  .then((data) => data.value)
  .then((value) => value.toUpperCase())
  .then((value) => value + "!!!")
  .then(console.log);

console.log("Fim!!!");
