const moles = document.querySelectorAll(".circle");
let place = Math.floor(Math.random() * 9 + 1);
let score = 0,
    round = 0,
    index = -2;
let timeout;
// let time = Math.floor(Math.random() * 1000);
// console.log(time);

function getRandomTime(min, max){
  return time = Math.floor(Math.random() * (max - min) + min);
}

function getRandomPlace(placed) {
    place = Math.floor(Math.random() * 9 + 1);

    if (placed === place) place = getRandomPlace(place);
    return place;
}

function checkForGameOver(){
    let indexSpan = document.querySelector("span");
console.log("\n\n", indexSpan.textContent)
    if(indexSpan.textContent == 20){
        dialogOpen(++round);
        return;
    }
}

function displayMole(place) {
    timeout = setTimeout(() => {
        let indexDiv;
        if(!timeoutFlag) {
            console.log("Inside setTimeout");
    
            index++;
            indexDiv = document.querySelector(".indexDiv");
            indexDiv.innerHTML = `Index = <span>${1 + ++index / 2}</span>`;
            console.log(place);
            
            moles.forEach((mole) => {
                if(mole.getAttribute("id") == place) mole.innerHTML = "";
            })
    
            place = getRandomPlace(place);
            displayMole(place);
        }
        else{
    
        }

        checkForGameOver();
    }, getRandomTime(2000, 3000))
    const mole = document.getElementById(place);
    mole.innerHTML = `<img src='./images/mole.svg' alt='mole' id='mole-img'>`;
}
displayMole(place);

function scoreDisplay() {
    const scoreDiv = document.querySelector(".scoreDiv");
    scoreDiv.textContent = `Score = ${++score}`;
    const indexDiv = document.querySelector(".indexDiv");
    indexDiv.innerHTML = `<p>Index = <span>${++index}</span></p>`;
}

function dialogOpen(round) {
    const dialog = document.querySelector("dialog");
    dialog.showModal();

    const replay = document.querySelector("#replay");

    replay.addEventListener("click", () => {
        score = -1;
        index = -1;
        scoreDisplay();

        const roundDiv = document.querySelector(".roundDiv");
        roundDiv.textContent = `Round = ${round}`;

        dialog.close();
    });
}

let timeoutFlag = false;



moles.forEach((mole) => {
    mole.addEventListener("click", () => {
        timeoutFlag = true;
        if (index < 20) {
            if (mole.getAttribute("id") == place) {
                mole.innerHTML = "";
                scoreDisplay();
                place = getRandomPlace(place);

                displayMole(place);
            } else {
            }
        }
        if (index === 20) {
            dialogOpen(++round);
            return;
        }
        timeoutFlag = false;
    });
});

