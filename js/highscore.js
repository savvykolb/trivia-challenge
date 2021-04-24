// This JS page is for my highscores page. It connects to my highscores HTML and highscores CSS. 

// Calls to the ID from HS HTML 
const highScoresList = document.querySelector("#highScoresList");
// Essentially, pull highscores from local storage or leave it empty 
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

// The Map object holds key-value pairs and remembers the original insertion order of the keys. and .join turns the array into a string. This function is what displays on the screen. Takes the elements from html that user inputs and displays them from local storage.
highScoresList.innerHTML = 
highScores.map(function(score) {
    return `<li class = high-score>${score.name} - ${score.score}</li>`
}).join('')


