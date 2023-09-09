const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = '0'
let questionCounter = '0'
let availableQuestions = []


let questions = [
    {
        question:'What color is a Polar Bears skin?',
        choice1:'White',
        choice2: 'Green',
        choice3: 'Yellow',
        choice4: 'Black',
        answer: 4,
    },
    {
        question: 'What is the only bird that can fly backwards?',
        choice1: 'Parrot',
        choice2: 'Robin',
        choice3: 'Hummingbird',
        choice4: 'Pidgeon',
        answer: 3,
    },
    {
        question: 'What is a group of owls called?',
        choice1: 'A gang',
        choice2: 'A parliament',
        choice3: 'A Posse',
        choice4: 'A murder',
        answer: 3,
    },
    {
        question: 'What shape is a goats pupils?',
        choice1: 'Rectangle',
        choice2: 'Circle',
        choice3: 'Square',
        choice4: 'Oval',
        answer: 1,
    },
    {
        question: 'How many hearts does the Giant Pacific Octopus have?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 3,
    },
    {
        question: 'On average, how many humans do sharks kill a year?',
        choice1: '1',
        choice2: '10',
        choice3: '100',
        choice4: '1000',
        answer: 2,
    },
    {
        question: 'Which animal has the longest gestation period?',
        choice1: 'Camels',
        choice2: 'Whales',
        choice3: 'Elephants',
        choice4: 'Walrus',
        answer: 3,
    },
    {
        question: 'What is the fastest land animal?',
        choice1: 'Greyhound',
        choice2: 'Horse',
        choice3: 'Ostrich',
        choice4: 'Cheetah',
        answer: 4,
    },
    {
        question: 'What is the national animal of Scotland?',
        choice1: 'Unicorn',
        choice2: 'Highland Cow',
        choice3: 'Red Squirrel',
        choice4: 'Dragon',
        answer: 1,
    },
    {
        question: 'What is the biggest species of Feline in the world?',
        choice1: 'Panther',
        choice2: 'Lion',
        choice3: 'Tiger',
        choice4: 'Ocelot',
        answer: 2,
    },
]

const SCORE_POINTS: 10
const MAX_QUESTIONS: 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = (...questions)
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width =`${(questionCounter/MAX_QUESTIONS) * 100}%`

        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestio.question
    }

