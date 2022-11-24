var center = document.createElement('center')
// board elements
let chessBoard = document.createElement('board')
// chessbaord array filling 64 spaces
const boardArr = [
	[
		'light-rook',
		'light-knight',
		'light-bishop',
		'light-queen',
		'light-king',
		'light-bishop2',
		'light-knight2',
		'light-rook2',
	],
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
	[
		'dark-rook',
		'dark-knight',
		'dark-bishop',
		'dark-queen',
		'dark-king',
		'dark-bishop2',
		'dark-knight2',
		'dark-rook2',
	],
]

for (let y = 0; y < 8; y++) {
	// creating tr
	let row = document.createElement('tr')

	for (let x = 0; x < 8; x++) {
		console.log(boardArr[y][x])

		// creating cell
		let cell = document.createElement('td')
		cell.classList.add('cell')
		// light chess pieces
		if (boardArr[y][x] === 'light-pawn') {
			cell.classList.add('light-pawn')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-rook') {
			cell.classList.add('light-rook')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-rook2') {
			cell.classList.add('light-rook2')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-knight') {
			cell.classList.add('light-knight')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-knight2') {
			cell.classList.add('light-knight2')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-bishop') {
			cell.classList.add('light-bishop')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-bishop2') {
			cell.classList.add('light-bishop2')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-queen') {
			cell.classList.add('light-queen')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'light-king') {
			cell.classList.add('light-king')
			// row.appendChild(cell)
		}
		// dark chess pieces
		if (boardArr[y][x] === 'dark-pawn') {
			cell.classList.add('dark-pawn')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-rook') {
			cell.classList.add('dark-rook')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-rook2') {
			cell.classList.add('dark-rook2')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-knight') {
			cell.classList.add('dark-knight')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-knight2') {
			cell.classList.add('dark-knight2')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-bishop') {
			cell.classList.add('dark-bishop')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-bishop2') {
			cell.classList.add('dark-bishop2')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-queen') {
			cell.classList.add('dark-queen')
			// row.appendChild(cell)
		}
		if (boardArr[y][x] === 'dark-king') {
			cell.classList.add('dark-king')
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
center.appendChild(chessBoard)
document.body.appendChild(center)
