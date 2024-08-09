const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const leftDice = document.querySelector(".img1");
const leftDiceSource = './images/dice' + randomNumber1 + '.png';
leftDice.setAttribute("src", leftDiceSource)

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const rightDice = document.querySelector(".img2");
const rightDiceSource = './images/dice' + randomNumber2 + '.png';
rightDice.setAttribute("src", rightDiceSource)


let title = document.querySelector('h1');
if (randomNumber1 > randomNumber2){
    title.innerHTML = "&#x1F6A9 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1){
    title.innerHTML = "Player 2 Wins! &#x1F6A9"
} else { 
    title.innerHTML = "Draw"
}


// Make it better in the future

// function getNumber1() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     const randomImg = './images/dice' + randomNumber + '.png';
//     const firstDice = document.querySelector(".img1");
//     secondDice.setAttribute("src", randomImg)
// }

// function getNumber2() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     const randomImg = './images/dice' + randomNumber + '.png';
//     const secondDice = document.querySelector(".img2");
//     secondDice.setAttribute("src", randomImg)
// }