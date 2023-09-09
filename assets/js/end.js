const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 3

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()


}