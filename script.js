const wordList = [
    'Rock',
    'Wind',
    'Fall',
    'Jump',
    'Leap',
    'Cliff',
    'Tighten',
    'Boulders',
    'Scared',
    'Danger',
    'Parachute',
    'Avalanche',
    'Freefalling',
    'Cliffhanger',
    'Desperation',
]




//&declare variables
let selectedWord = ''
let displayWord = ''
let wrongGuesses = 0
let guessedLetters = []
const maxMistakes = 6

//& Start game function
function startGame(level){
wrongGuesses = 0
guessedLetters = []
selectedWord = getRandomWord(level)
updateDifficultyDisplay(level)


document.getElementById('gameArea').classList.remove('d-none')
document.getElementById('gameArea').classList.add('d-block')

document.getElementById('difficultyBox').classList.remove('d-none')
document.getElementById('difficultyBox').classList.add('d-block')

document.getElementById('difficultySelection').classList.add('d-none')
}

function getRandomWord(level) {
    let filteredWords = wordList.filter(word => {
        if (level === 'Easy') return word.length <=4
        if (level === 'Medium') return word.length >= 5 && word.length <=7
        if (level === 'Hard') return word.length >= 8
    })

    return filteredWords[Math.floor(Math.random()*filteredWords.length)]
}

function updateDifficultyDisplay(level) {
let difficultyBox = document.getElementById('difficultyBox')
difficultyBox.classList.remove('Easy', 'Medium', 'Hard')
difficultyBox.classList.add(level)
difficultyBox.innerText = `Difficulty: ${level}`

}

