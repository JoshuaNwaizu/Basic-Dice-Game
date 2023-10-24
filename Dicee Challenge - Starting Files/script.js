let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomDiceImage = 'images/dice' + randomNumber1 + '.png'
let images = document.querySelector('.img1').setAttribute('src', randomDiceImage)

let randomNumber2 = Math.floor(Math.random() * 6) + 1
let randomDiceImage2 = 'images/dice' + randomNumber2 + '.png'
let images2 = document.querySelector('.img2').setAttribute('src', randomDiceImage2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 won the game 🥳'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 won the game 🥳'
} else {
    document.querySelector('h1').innerHTML = 'it\'s a draw 🤧'

}