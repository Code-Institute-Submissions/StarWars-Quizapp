// --- Global Variables --- //

const questionText = document.querySelector(`#question`);
const answerText = Array.from(document.querySelectorAll(`.answer-content`));
const timerText = document.querySelector(`#quiz-timer`);
const scoreText = document.querySelector(`#score`);

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []



// --- Quiz Questions and Answers --- //

let questions = [
    {
        question: 'Who created the Rule of two for the Sith ?',
        answer1: 'Darth Sidius',
        answer2: 'Darth Tyrannus',
        answer3: 'Darth Plagueis',
        answer4: 'Darth Bane',
        answer: 4,
    },
    {
        question: "What is the name of of the Jedi Master who served on the Jedi Council and was the same species as Master Yoda?",
        answer1: "Master Yodel",
        answer2: "Master Yaddle",
        answer3: "Master Yokun",
        answer4: "Master Yaddell",
        answer: 2,
    },
    {
        question: "What was the nickname given to Ahsoka Tano by her Master Anakin Skywalker?",
        answer1: "Snips",
        answer2: "Crips",
        answer3: "Trips",
        answer4: "Snoks",
        answer: 1,
    },
    {
        question: "What species does Ahsoka Tano belong to?",
        answer1: "Utapaun",
        answer2: "Chagrian",
        answer3: "Arcona",
        answer4: "Togruta",
        answer: 4,
    },
    {
        question: "In what year did Master Yoda become one with the Force?",
        answer1: "896 BBY",
        answer2: "2 ABY",
        answer3: "4 ABY",
        answer4: "1 ABY",
        answer: 3,
    },
    {
        question: "What is the name of the Jedi Master who shared the same species as Ahsoka Tano?",
        answer1: "Jedi Master Asaak Dan",
        answer2: "Jedi Master Kirames Kaj",
        answer3: "Jedi Master Shaak Ti",
        answer4: "Jedi Master Raana Tey",
        answer: 3,
    },
    {
        question: "What is the name of the Convor that follows Ahsoka Tano?",
        answer1: "Morai",
        answer2: "Moray",
        answer3: "Mortis",
        answer4: "Mor'Tuun",
        answer: 1,
    },
    {
        question: "What color was Obi-Wan Kenobi's lightsaber",
        answer1: "Red",
        answer2: "Green",
        answer3: "Blue",
        answer4: "Purple",
        answer: 3,
    },
    {
        question: "Which former smuggler and pirate runs an interstellar tavern in a castle on the fictional planet Takodana, and is over 1000 years old?",
        answer1: "Hondo Ohnaka",
        answer2: "Enfys Nest",
        answer3: "Cikatro Vizago",
        answer4: "Maz Kanata",
        answer: 4,
    },
    {
        question: "Which Sith lord had the ability to drain entire planets by using their connection to the Force?",
        answer1: "Darth Bane",
        answer2: "Darth Nihilus",
        answer3: "Darth Malgus",
        answer4: "Darth Vitiate",
        answer: 2,
    }
]

const scorePoints = 100
const maxQuestions = 10

// --- Quiz Game --- //

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign(`/end.html`)
    }

    questionCounter++

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    answerText.forEach(answer => {
        const number = answer.dataset['number']
        answer.innerText = currentQuestion['answer' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswer = true
}