// --- Global Variables --- //
const username = document.querySelector(`#username`);
const saveScore = document.querySelector(`#save-score`);
const finalScore = document.querySelector(`#quiz-finalscore`);
const recentScore = document.querySelector(`#recent-score`);


const highScores = JSON.parse(localStorage.getItem(`highScores`)) || []

const maxHighScores = 6

finalScore.innerText = recentScore

username.addEventListener(`keyup`, () => {
    saveScore.disabled = !username.value
})

saveHighscore = e => {
    e.preventDefault()

    const score = {
        score: recentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(6)

    localStorage.setItem(`highScores`, JSON.stringify(highScores))
    window.location.assign(`/`)


}