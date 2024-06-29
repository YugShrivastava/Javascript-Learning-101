// Strating New.

const moles = document.querySelectorAll("circle");
let timeoutID, index = 0, score = 0, round = 0;

function getRandomPlace(placed) {
    let place = Math.floor(Math.random() * 9 + 1);

    if (placed == place) place = getRandomPlace(place);
    console.log(place);
    return place;
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function incrementIndex(){
    index++;
    const indexDiv = document.querySelector(".indexDiv");
    indexDiv.innerHTML = `Index = <span>${index}<span>`;
}

function incrementScore(){
    score++;
    const scoreDiv = document.querySelector(".scoreDiv");
    scoreDiv.innerHTML = `Score = ${score}`;
}

function incrementRound(){
    round++;
    const roundDiv = document.querySelector(".roundDiv");
    roundDiv.innerHTML = `Round = ${round}`;
}

function timeout(){
        incrementIndex();
        if(checkForGameOver()) return;
}



function displayMole(min, max, place) {
    moles.forEach((mole) => {
        if (mole.getAttribute("id") == place) {
            mole.innerHTML = `<img src='./images/mole.svg' alt='mole' id='mole-img'>`;
            timeoutID = setTimeout(timeout(), getRandomTime(min, max));

            return;
        }
    });
}

function clearDisplayMole(place) {}

function resetAll() {}

function startGame() {
    let gameRounds = 20;

    for (let i = 0; i < gameRounds; i++) {}
}

displayMole(800, 1000, Math.floor(Math.random() * 9 + 1));

