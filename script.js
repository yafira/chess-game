var center = document.createElement('center')
// board elements
let chessBoard = document.createElement('board')
// chessbaord array filling 64 spaces
const boardArr = [
	['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
	[
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
	],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
	],
	['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
]

for (let y = 0; y < 8; y++) {
	// creating tr
	let row = document.createElement('tr')

	for (let x = 0; x < 8; x++) {
		console.log(boardArr[y][x])

		// creating cell
		let cell = document.createElement('td')
		cell.classList.add('cell')

		if (boardArr[y][x] === 'light-pawn') {
			cell.classList.add('light-pawn')
			// row.appendChild(cell)
		}

		if (boardArr[y][x] === 'dark-pawn') {
			cell.classList.add('dark-pawn')
			// row.appendChild(cell)
		}
		// white cells
		if ((y + x) % 2 == 0) {
			// class attribute for all white cells
			cell.classList.add('white-cell')
			row.appendChild(cell)
		}
		// black cells
		else {
			cell.classList.add('purple-cell')
			row.appendChild(cell)
		}
	}
	// append tr
	chessBoard.appendChild(row)
}
// append center to chess board
center.appendChild(chessBoard)

// modifying chess board attribute properties
chessBoard.setAttribute('cellspacing', '0')
chessBoard.setAttribute('width', '270px')
document.body.appendChild(center)
