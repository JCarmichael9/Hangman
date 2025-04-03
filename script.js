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

let lebronAudio = new Audio('lebronlebronlebronjames.mp3');

//&declare variables
let selectedWord = ''
let displayWord = ''
let wrongGuesses = 0
let guessedLetters = []
const maxMistakes = 5
let wins = 0
let losses = 0

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
    document.getElementById('slippityDissapearrity').classList.add('d-none')
    document.getElementById('slippityDissapearrity').classList.remove('d-inline-block')
    document.getElementById('letterInput').focus()
    document.getElementById('pic').classList.remove('d-none')
    
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
    let guessedLetter = inputField.value.toLowerCase()

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

function updateWrongGuess(guessedLetter) {
    wrongGuesses++
    document.getElementById('wrongLetters').textContent += `${guessedLetter}`
    document.getElementById('shamrock').src = `imgs/image${6 - wrongGuesses}.jpg`
    new Audio('wantasprite.mp3').play()

    if (wrongGuesses === maxMistakes) {
        endGame()
    }
}

function updateCorrectGuess(guessedLetter) {
    let newDisplayedWord = ''
    new Audio('LEBROOOOOON.mp3').play()
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guessedLetter) {
            newDisplayedWord += guessedLetter
        } else {
            newDisplayedWord += displayWord[i]
        }
    }
displayWord = newDisplayedWord
updateUI()
if (!newDisplayedWord.includes('_')) {
    endGame(true)
}
}

function endGame(won) {
    difficultyBox.classList.add('d-none')
    gameArea.classList.add('d-none')
    document.getElementById('pic').classList.add('d-none')
    if (won === true) {
        wins++
        updateScore()
        setTimeout(() => endText.textContent = `You Didn't Let LeBron Come, Great Job! The Word Was ${selectedWord}`, 100)
        setTimeout(() => endContainer.classList.remove('d-none'), 100)
        lebronAudio.play();
        
        return
    } else {
        losses++
        updateScore()
        setTimeout(() => endText2.textContent = `Where'd Lebron Go?`, 100)
        setTimeout(() => endContainer2.classList.remove('d-none'), 100)
        setTimeout(() => endContainer2.classList.add('d-block'), 100)
        setTimeout(() => endText2.classList.add('appear'), 100)
        setTimeout(() => theEnd.classList.remove('d-none'), 100)
        setTimeout(() => theEnd.classList.add('jumpscare'), 100)
        setTimeout(() => new Audio('LEBROOOOOON2.mp3').play(), 5000)
        setTimeout(() => wins.classList.add('d-none'), 5000)
        setTimeout(() => losses.classList.add('d-none'), 5000)
        
        return
    }
}



document.getElementById('letterInput').addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        guessLetter()
    }
})

function restartGame() {
    wrongGuesses = 0
    document.getElementById('gameArea').classList.add('d-none')
    document.getElementById('gameArea').classList.remove('d-block')
    document.getElementById('difficultyBox').classList.add('d-none')
    document.getElementById('difficultyBox').classList.remove('d-block')
    document.getElementById('difficultySelection').classList.remove('d-none')
    document.getElementById('slippityDissapearrity').classList.remove('d-none')
    document.getElementById('slippityDissapearrity').classList.add('d-inline-block')
    document.getElementById('pic').classList.add('d-none')
    document.getElementById('wrongLetters').textContent = 'Wrong Guesses:'
    document.getElementById('endContainer').classList = 'd-none'
    document.getElementById('shamrock').src = `imgs/image${6 - wrongGuesses}.jpg`
    document.getElementById('theEnd').classList.add('d-none')
    document.getElementById('endText2').classList.remove('appear')
    document.getElementById('endContainer2').classList.add('d-none')
    document.getElementById('endContainer2').classList.remove('d-block')
    lebronAudio.pause();
  lebronAudio.currentTime = 0 
  document.getElementById('wins').classList.remove('d-none')
  document.getElementById('losses').classList.remove('d-none')
  updateScores()
}

function updateScore () {
document.getElementById('wins').textContent = `You've Won ${wins} Times`
document.getElementById('losses').textContent = `You've Lost ${losses} Times`
}
