/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

const columns = [
  [35, 28, 21, 14, 7, 0],
  [36, 29, 22, 15, 8, 1],
  [37, 30, 23, 16, 9, 2],
  [38, 31, 24, 17, 10, 3],
  [39, 32, 25, 18, 11, 4],
  [40, 33, 26, 19, 12, 5],
  [41, 34, 27, 20, 13, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let gameBoard, turn, winner
let p1Score = 0
let p2Score = 0

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const hoverZones = document.querySelector('.hover-zones')
const sqArray = document.querySelectorAll('.zones')
const p1Wins = document.querySelector('#p1-score')
const p2Wins = document.querySelector('#p2-score')
const resetSound = new Audio('assets/game_connect_4_playing_discs_drop_into_box.mp3')
const dropSound = new Audio('assets/dropSound (1).mp3')
const body = document.querySelector('body')
const jungleBtn = document.querySelector('#jungle-button')
const desertBtn = document.querySelector('#desert-button')
const mountainBtn = document.querySelector('#mountain-button')

/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', function(){
  resetSound.volume = .5
  resetSound.play()
  init()
})

hoverZones.addEventListener('mouseover', function(event){
  if (turn === 1) {
    event.target.classList.add('red')
  } if (turn === -1) {
    event.target.classList.add('yellow')
  }
})

hoverZones.addEventListener('mouseout', function(event){
  event.target.classList.remove('red', 'yellow')
})

hoverZones.addEventListener('click', function(event){ 
  if (event.target.id === 'outsideZone') {
    return
  }
  play(event)
})

jungleBtn.addEventListener('click', function(){
  body.style.backgroundImage = "url('../assets/jungle-background.jpg')"
})

desertBtn.addEventListener('click', function(){
  body.style.backgroundImage = "url('../assets/desert-background.jpg')"
})

mountainBtn.addEventListener('click', function(){
  body.style.backgroundImage = "url('../assets/mountain-background.jpg')"
})

/*-------------------------------- Functions --------------------------------*/

init()

function play(event) {
  let column = columns[parseInt(event.target.id.slice(-1))]
  for (let i = 0; i < column.length; i++) {
    if (winner !== null){
      return
    }
    if (gameBoard[column[i]] === null) {
      dropSound.volume = .5
      dropSound.play()    
      gameBoard[column[i]] = turn
      getWinner()
      changeTurn()
      render()
      return
    }
  }
}

function init() {
  gameBoard = [null, null, null, null, null, null,  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  null, null, null, null, null, null, null, null,  null, null, null, null,]
  turn = 1
  winner = null
  message.textContent = ''
  resetBtn.setAttribute('hidden', true)
  render()
}

function render() {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 1) {
      sqArray[i].classList.add('red')
    } else if (gameBoard[i] === -1) {
      sqArray[i].classList.add('yellow')
    } else {
      sqArray[i].classList.remove('red', 'yellow')
    }
  }
  isWinner()
  scoreCard()
  if (gameBoard.some(x => Math.abs(x) === 1)){
    resetBtn.hidden = false
  }
}

function isWinner() {
  return winner === 1 ? message.textContent = "Player 1 wins!"
  : winner === -1 ? message.textContent = "Player 2 wins!"
  : winner === 'T' ? message.textContent = "Tie game!"
  : message.textContent = `It's ${turn === -1 ? "Player 2" : "Player 1"}'s turn.`
}

function changeTurn() {
  turn = turn * -1
}

function hover(event) {
  if (turn === 1) {
    event.target.classList.add('red')
  } if (turn === -1) {
    event.target.classList.add('yellow')
  }
}

function getWinner() {
  for (i = 0; i < winningCombos.length; i++) {
    if (Math.abs(gameBoard[winningCombos[i][0]] +
      gameBoard[winningCombos[i][1]] +
      gameBoard[winningCombos[i][2]] +
      gameBoard[winningCombos[i][3]]) === 4) {
      winner = turn
      if (winner === 1) {
        p1Score += 1
      } if (winner === -1) {
        p2Score += 1
      } 
    } if (gameBoard.every(x => Math.abs(x) === 1)){
      winner = 'T'
    }
  }
}

function scoreCard() {
  p1Wins.textContent = p1Score
  p2Wins.textContent = p2Score
}