const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#save-score-btn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5; 

finalScore.innerText = mostRecentScore; 

username.addEventListener("keyup", function() {
    saveScoreBtn.disabled = !username.value 
})

saveHighScore = function(e) {
    e.preventDefault(); 

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score);

    highScores.sort(function(a,b) {
        return b.score - a.score
    })

    highScores.splice(5); 

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("../index.html")
}