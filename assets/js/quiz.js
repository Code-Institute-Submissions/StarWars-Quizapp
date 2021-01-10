// --- Global Variables --- //

const questionText = document.querySelector(`#question`);
const answerText = Array.from(document.querySelectorAll(`.answer-content`));
const timerText = document.querySelector(`#quiz-timer`);
const scoreText = document.querySelector(`#score`);

let currentQuestion = 0
let acceptingAnswer = true
let score = 0
let availableQuestions = []

// --- Quiz Questions --- //

