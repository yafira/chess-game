var center = document.createElement('center')
// board elements
let chessBoard = document.createElement('board')

for (let y = 0; y < 8; y++) {
	// creating tr
	let row = document.createElement('tr')

	for (let x = 0; x < 8; x++) {
		// creating cell
		let cell = document.createElement('td')
		// white cells
		if ((y + x) % 2 == 0) {
			// class attribute for all white cells
			cell.setAttribute('class', 'cell white-cell')
			row.appendChild(cell)
		}
		// black cells
		else {
			cell.setAttribute('class', 'cell purple-cell')
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
