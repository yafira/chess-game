var center = document.createElement('center')

// board elements
var chessBoard = document.createElement('board')
for (var i = 0; i < 8; i++) {
	// creating tr
	var tr = document.createElement('tr')
	for (var j = 0; j < 8; j++) {
		// creating cell
		var td = document.createElement('td')
		// white cells
		if ((i + j) % 2 == 0) {
			// class attribute for all white cells
			td.setAttribute('class', 'cell white-cell')
			tr.appendChild(td)
		}
		// black cells
		else {
			td.setAttribute('class', 'cell purple-cell')
			tr.appendChild(td)
		}
	}
	// append tr
	chessBoard.appendChild(tr)
}
// append center to chess board
center.appendChild(chessBoard)

// modifying chess board attribute properties
chessBoard.setAttribute('cellspacing', '0')
chessBoard.setAttribute('width', '270px')
document.body.appendChild(center)
