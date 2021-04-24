const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#save-score-btn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")

// JSON parse allows highscores to be shown from server
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

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

    // This adds in our MAX HIGH SCOREs 
    highScores.splice(5); 

    // This allows the data to be saved to the server as a string. When we call it back we use JSON parse 
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("../index.html")
}