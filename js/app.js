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

const column0 = [35, 28, 21, 14, 7, 0]
const column1 = [36, 29, 22, 15, 8, 1]
const column2 = [37, 30, 23, 16, 9, 2]
const column3 = [38, 31, 24, 17, 10, 3]
const column4 = [39, 32, 25, 18, 11, 4]
const column5 = [40, 33, 26, 19, 12, 5]
const column6 = [41, 34, 27, 20, 13, 6]

/*---------------------------- Variables (state) ----------------------------*/

let gameBoard, turn, winner


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const hoverZones = document.querySelector('.hoverZones')
const sq0 = document.getElementById('0')
const sq1 = document.getElementById('1')
const sq2 = document.getElementById('2')
const sq3 = document.getElementById('3')
const sq4 = document.getElementById('4')
const sq5 = document.getElementById('5')
const sq6 = document.getElementById('6')
const sq7 = document.getElementById('7')
const sq8 = document.getElementById('8')
const sq9 = document.getElementById('9')
const sq10 = document.getElementById('10')
const sq11 = document.getElementById('11')
const sq12 = document.getElementById('12')
const sq13 = document.getElementById('13')
const sq14 = document.getElementById('14')
const sq15 = document.getElementById('15')
const sq16 = document.getElementById('16')
const sq17 = document.getElementById('17')
const sq18 = document.getElementById('18')
const sq19 = document.getElementById('19')
const sq20 = document.getElementById('20')
const sq21 = document.getElementById('21')
const sq22 = document.getElementById('22')
const sq23 = document.getElementById('23')
const sq24 = document.getElementById('24')
const sq25 = document.getElementById('25')
const sq26 = document.getElementById('26')
const sq27 = document.getElementById('27')
const sq28 = document.getElementById('28')
const sq29 = document.getElementById('29')
const sq30 = document.getElementById('30')
const sq31 = document.getElementById('31')
const sq32 = document.getElementById('32')
const sq33 = document.getElementById('33')
const sq34 = document.getElementById('34')
const sq35 = document.getElementById('35')
const sq36 = document.getElementById('36')
const sq37 = document.getElementById('37')
const sq38 = document.getElementById('38')
const sq39 = document.getElementById('39')
const sq40 = document.getElementById('40')
const sq41 = document.getElementById('41')
const sqArray = [
  sq0, sq1, sq2, sq3, sq4, sq5, sq6,
  sq7, sq8, sq9, sq10, sq11, sq12, sq13,
  sq14, sq15, sq16, sq17, sq18, sq19, sq20,
  sq21, sq22, sq23, sq24, sq25, sq26, sq27,
  sq28, sq29, sq30, sq31, sq32, sq33, sq34,
  sq35, sq36, sq37, sq38, sq39, sq40, sq41,
]



/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', function(){
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
  console.log(parseInt(event.target.id.slice(-1)))
})

// board.addEventListener('click', function(event){
//   console.log(event.target)
// })


/*-------------------------------- Functions --------------------------------*/

init()

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
  if (gameBoard.some(x => Math.abs(x) === 1)){
    resetBtn.hidden = false
  }
}

function isWinner() {
  return winner === 1 ? message.textContent = "Player 1 wins!"
  : winner === -1 ? message.textContent = "Player 2 wins!"
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

