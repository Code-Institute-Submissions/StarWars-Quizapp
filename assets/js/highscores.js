/*jshint esversion: 6 */
const leaderboard = document.querySelector(`#leaderboard`);
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];
//Create a <li> element that acts as a leaderboard with the Users saved name and score.
leaderboard.innerHTML =
    highScores.map(score => {
        return `<li class="list-content">${score.name} - ${score.score}</li>`;
    }).join(``);