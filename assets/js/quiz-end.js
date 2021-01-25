/*jshint esversion: 6 */

// --- Global Variables --- //
const username = document.querySelector(`#username`);
const saveScore = document.querySelector(`#save-score`);
const finalScore = document.querySelector(`#quiz-finalscore`);
const recentScore = localStorage.getItem(`recentScore`);
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

finalScore.innerText = recentScore;
// When the user has type into the input container, remove the disabled option on the save button. //
username.addEventListener(`keyup`, () => {
    saveScore.disabled = !username.value;
});
/*  When save button is clicked, save the user score and name. 
    Set the users name and score into local storage and reset the page */
let saveHighscore = e => {
    e.preventDefault();

    const score = {
        score: recentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(6);

    localStorage.setItem(`highScores`, JSON.stringify(highScores));
    window.location.assign(`https://harry-leepz.github.io/StarWars-Quizapp/quiz-end.html`);


};