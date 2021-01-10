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



// --- Quiz Questions and choices --- //

let questions = [
    {
        question: 'Who created the Rule of two for the Sith ?',
        choice1: 'Darth Sidius',
        choice2: 'Darth Tyrannus',
        choice3: 'Darth Plagueis',
        choice4: 'Darth Bane',
        answer: 4,
    },
    {
        question: "What is the name of of the Jedi Master who served on the Jedi Council and was the same species as Master Yoda?",
        choice1: "Master Yodel",
        choice2: "Master Yaddle",
        choice3: "Master Yokun",
        choice4: "Master Yaddell",
        answer: 2,
    },
    {
        question: "What was the nickname given to Ahsoka Tano by her Master Anakin Skywalker?",
        choice1: "Snips",
        choice2: "Crips",
        choice3: "Trips",
        choice4: "Snoks",
        answer: 1,
    },
    {
        question: "What species does Ahsoka Tano belong to?",
        choice1: "Utapaun",
        choice2: "Chagrian",
        choice3: "Arcona",
        choice4: "Togruta",
        answer: 4,
    },
    {
        question: "In what year did Master Yoda become one with the Force?",
        choice1: "896 BBY",
        choice2: "2 ABY",
        choice3: "4 ABY",
        choice4: "1 ABY",
        answer: 3,
    },
    {
        question: "What is the name of the Jedi Master who shared the same species as Ahsoka Tano?",
        choice1: "Jedi Master Asaak Dan",
        choice2: "Jedi Master Kirames Kaj",
        choice3: "Jedi Master Shaak Ti",
        choice4: "Jedi Master Raana Tey",
        answer: 3,
    },
    {
        question: "What is the name of the Convor that follows Ahsoka Tano?",
        choice1: "Morai",
        choice2: "Moray",
        choice3: "Mortis",
        choice4: "Mor'tuun",
        answer: 1,
    },
    {
        question: "What color was Obi-Wan Kenobi's lightsaber",
        choice1: "Red",
        choice2: "Green",
        choice3: "Blue",
        choice4: "Purple",
        answer: 3,
    },
    {
        question: "Which former smuggler and pirate runs an interstellar tavern in a castle on the fictional planet Takodana, and is over 1000 years old?",
        choice1: "Hondo Ohnaka",
        choice2: "Enfys Nest",
        choice3: "Cikatro Vizago",
        choice4: "Maz Kanata",
        answer: 4,
    },
    {
        question: "Which Sith lord had the ability to drain entire planets by using their connection to the Force?",
        choice1: "Darth Bane",
        choice2: "Darth Nihilus",
        choice3: "Darth Malgus",
        choice4: "Darth Vitiate",
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

    answerText.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswer = true
}

answerText.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswer) return

        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedchoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz()