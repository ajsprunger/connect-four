/*-------------------------------- Constants --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/

let gameBoard, turn, winner


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const hoverZones = document.querySelector
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
