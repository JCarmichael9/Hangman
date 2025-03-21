const wordList = [
    'lebron',
    'kingjames',
    'lakers',
    'cavs',
    'heat',
    'mvp',
    'nba',
    'basketball',
    'champion',
    'goat',
    'cleveland',
    'losangeles',
    'playoffs',
    'finals',
    'dunk',
    'tripledouble',
    'assist',
    'rebounds',
    'scoring',
    'block',
    'fastbreak',
    'teamwork',
    'teammates',
    'legend',
    'splash',
    'highflyer',
    'bounce',
    'stardom',
    'superstar',
    'clutch',
    'icon',
    'leadership',
    'court',
    'gamechanger',
    'crossover',
    'jumper',
    'bounceback',
    'athlete',
    'championship',
    'legacy',
    'dynasty',
    'rookie',
    'highlight',
    'allstar',
    'workethic',
    'powerhouse',
    'slam',
    'hoops',
    'draft'
];



//&declare variables
let selectedWord = ''
let displayWord = ''
let wrongGuesses = 0
let guessedLetters = []
const maxMistakes = 6

//& Start game function
function startGame(level) {
    wrongGuesses = 0
    guessedLetters = []
    selectedWord = getRandomWord(level)
    displayWord = '_'.repeat(selectedWord.length)
    updateDifficultyDisplay(level)
    updateUI()
    document.getElementById('gameArea').classList.remove('d-none')
    document.getElementById('gameArea').classList.add('d-block')
    document.getElementById('difficultyBox').classList.remove('d-none')
    document.getElementById('difficultyBox').classList.add('d-block')
    document.getElementById('difficultySelection').classList.add('d-none')
    document.getElementById('letterInput').focus()
}

function getRandomWord(level) {
    let filteredWords = wordList.filter(word => {
        if (level === 'Easy') return word.length <= 4
        if (level === 'Medium') return word.length >= 5 && word.length <= 7
        if (level === 'Hard') return word.length >= 8
    })
    return filteredWords[Math.floor(Math.random() * filteredWords.length)]
}

function updateDifficultyDisplay(level) {
    let difficultyBox = document.getElementById('difficultyBox')
    difficultyBox.classList.remove('Easy', 'Medium', 'Hard')
    difficultyBox.classList.add(level)
    difficultyBox.innerText = `Difficulty: ${level}`
}

function updateUI() {
    document.getElementById('wordDisplay').textContent = displayWord.split('').join(' ')
}

function guessLetter() {
    let inputField = document.getElementById('letterInput')
    let guessedLetter = inputField.ariaValueMax.toLowerCase()

    if (!guessedLetter.match(/^[a-z]$/)) {
        alert('Please enter a valid letter (A-Z), do it for LeGoat')
        inputField.value = ''
        return
    }

    if (guessedLetters.includes(guessedLetter)) {
        alert('You already guessed that letter buddy, now get it right to save the LeKing')
        inputField.value = ''
        return
    }

    guessedLetters.push(guessedLetter)

    if (selectedWord.includes(guessedLetter)) {
        updateCorrectGuess(guessedLetter)
    } else {
        updateWrongGuess(guessedLetter)
    }

    inputField.value = ''
    document.getElementById('letterInput').focus()

}