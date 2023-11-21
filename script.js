let squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function button() {
    squares.forEach(square => {
        square.innerHTML = '';
        square.removeEventListener('click', handleSquareClick);
        square.addEventListener('click', handleSquareClick, { once: true });
    });
    currentPlayer = 'X';
}

function handleSquareClick(e) {
    const square = e.target;
    square.innerHTML = currentPlayer;

    if (checkWinner()) {
        setTimeout(() => {
            alert(`Player ${currentPlayer} wins!`);
            button();
        }, 0);
        return;
    }

    if (checkDraw()) {
        setTimeout(() => {
            alert('It\'s a draw!');
            button();
        }, 0);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (checkRow(i) || checkColumn(i)) {
            return true;
        }
    }

    return checkDiagonal() || checkAntiDiagonal();
}

function checkRow(row) {
    const startIdx = row * 3;
    return squares[startIdx].innerHTML !== '' &&
           squares[startIdx].innerHTML === squares[startIdx + 1].innerHTML &&
           squares[startIdx].innerHTML === squares[startIdx + 2].innerHTML;
}

function checkColumn(col) {
    return squares[col].innerHTML !== '' &&
           squares[col].innerHTML === squares[col + 3].innerHTML &&
           squares[col].innerHTML === squares[col + 6].innerHTML;
}

function checkDiagonal() {
    return squares[0].innerHTML !== '' &&
           squares[0].innerHTML === squares[4].innerHTML &&
           squares[0].innerHTML === squares[8].innerHTML;
}

function checkAntiDiagonal() {
    return squares[2].innerHTML !== '' &&
           squares[2].innerHTML === squares[4].innerHTML &&
           squares[2].innerHTML === squares[6].innerHTML;
}

function checkDraw() {
    return Array.from(squares).every(square => square.innerHTML !== '');
}

button();

