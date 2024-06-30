// Strating New.

const moles = document.querySelectorAll(".circle");
let timeoutID,
    index = 0,
    score = 0,
    round = 0;

function getRandomPlace() {
    return Math.floor(Math.random() * 9 + 1);
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkForGameOver() {}

function incrementIndex() {
    index++;
    const indexDiv = document.querySelector(".indexDiv");
    indexDiv.innerHTML = `Index = <span>${index}<span>`;
}

function incrementScore() {
    score++;
    const scoreDiv = document.querySelector(".scoreDiv");
    scoreDiv.innerHTML = `Score = ${score}`;
}

function incrementRound() {
    round++;
    const roundDiv = document.querySelector(".roundDiv");
    roundDiv.innerHTML = `Round = ${round}`;
}

function clearDisplayMole(place) {
    moles.forEach((mole) => {
        if (mole.getAttribute("id") == place) {
            mole.innerHTML = "";
        }
    });
}

function timeout(place) {
    clearDisplayMole(place);
    incrementIndex();    
}



function displayMole(place) {
    console.log(place);
    moles.forEach((mole) => {
        if (mole.getAttribute('id') == place) {
            mole.innerHTML = `<img src='./images/mole.svg' alt='mole' id='mole-img'>`;
        }
    });
    return;
}

function resetAll() {}

function startGame() {
    let gameRounds = 20;

    for (let i = 0; i < gameRounds; i++) {
        place = getRandomPlace();
        displayMole(place);
        console.log(place);
        timeoutID = setTimeout(timeout(place), getRandomTime(800, 1000));
        checkForGameOver();
    }
}


startGame();