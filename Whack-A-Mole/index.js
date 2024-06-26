const whackCircles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const moles = document.querySelectorAll(".circle");
let place = Math.floor(Math.random() * 9 + 1);
let round = 0,
  score = 0;

function getRandomPlace(placed) {
  place = Math.floor(Math.random() * 9 + 1);

  if (placed === place) place = getRandomPlace();
  return place;
}

function whackIt(event) {
  event.target.innerHTML = "";
  score++;
  playRound();
}

function displayMole(place) {
  const mole = document.getElementById(place);
  mole.innerHTML = `<img src='./images/mole.svg' alt='mole' id='mole-img'>`;
}

function popUp(place) {
  console.log(whackCircles);
  console.log(place);
  let mole = Number(prompt("Enter the mole circle number: "));
  if (mole === place) console.log("Correct");
  else playRound(place);
}

function playRound(place) {
  whackCircles[place - 1] = place;
  popUp(place);
  whackCircles[place - 1] = 0;

  place = getRandomPlace(place);
}

function startGame() {
  while (round < 10) {
    console.log("Round Number: ", ++round);
    playRound(place);
  }

  console.log("Score = ", score);
  console.log("\n\nCompleted.");
}

moles.forEach((mole) => {
  mole.addEventListener("click", whackIt(event));
});

// startGame();

// AA7339 F4F3F3 FCFCFC
