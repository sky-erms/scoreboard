// let homeEl = document.getElementById("home-counter");
// let guestEl= document.getElementById("guest-counter");

function addPoints(scoreBoardId, points){
    const scoreEl = document.getElementById(scoreBoardId);
    let currentScore = parseInt(scoreEl.textContent);
    scoreEl.textContent = currentScore + points;
}


