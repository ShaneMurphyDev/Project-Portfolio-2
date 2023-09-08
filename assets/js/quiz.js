const question = document.querySelector('#question');
const choices = document.querySelector('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = '0'
let questionCounter = '0'
