const leaderboard = document.querySelector(`#leaderboard`)
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || []

leaderboard.innerHTML = 
highScores.map(score => {
    return `<li class="page-content">${score.name} - ${score.score}</li>`
}).join(``)