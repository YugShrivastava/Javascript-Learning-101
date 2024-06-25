const whackCircles = [0,0,0,0,0,0,0,0,0];

function getRandomPlace(placed){
    let place = Math.floor(Math.random() * 9 + 1);
    
    if(placed === place) place = getRandomPlace();
    return place;
}

function playRound(place){
    
}