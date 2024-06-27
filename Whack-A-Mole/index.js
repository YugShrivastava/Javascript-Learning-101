const moles = document.querySelectorAll(".circle");
let place = Math.floor(Math.random() * 9 + 1);
let score = 0,
    round = 0;

// let time = Math.floor(Math.random() * 1000);
// console.log(time);

// function getRandomTime(min, max){
//   return time = Math.floor(Math.random() * (max - min) + min);
// }

function getRandomPlace(placed) {
    place = Math.floor(Math.random() * 9 + 1);

    if (placed === place) place = getRandomPlace(place);
    return place;
}

function displayMole(place) {
    const mole = document.getElementById(place);
    mole.innerHTML = `<img src='./images/mole.svg' alt='mole' id='mole-img'>`;
}
displayMole(place);

function scoreDisplay() {
    const scoreDiv = document.querySelector(".scoreDiv");
    scoreDiv.textContent = `Score = ${++score}`;
}

function dialogOpen(round) {
    const dialog = document.querySelector("dialog");
    dialog.showModal();

    const replay = document.querySelector("#replay");

    replay.addEventListener("click", () => {
        score = -1;
        scoreDisplay();

        const roundDiv = document.querySelector(".roundDiv");
        roundDiv.textContent = `Round = ${round}`;

        dialog.close();
    });
}

moles.forEach((mole) => {
    mole.addEventListener("click", () => {
        if (score < 10) {
            if (mole.getAttribute("id") == place) {
                mole.innerHTML = "";
                scoreDisplay();
                place = getRandomPlace(place);
                displayMole(place);
            } else {
            }
        }
        if (score === 10) {
            dialogOpen(++round);
            return;
        }
    });
});
