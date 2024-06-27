const cells = document.querySelectorAll('.cell');
      let xIsNext = true;

      function handleClick(e) {
        // Get the clicked cell
        const cell = e.target;

        // Check if the cell is already filled
        if (cell.textContent !== '') {
          return;
        }

        // Fill the cell with X or O
        cell.textContent = xIsNext ? 'X' : 'O';
        cell.classList.add("selected");
        // Check for win conditions
        checkWinConditions();

        // Switch turns
        xIsNext = !xIsNext;
      }

      function checkWinConditions() {
        // Array of all possible win conditions
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];

        // Check each win condition
        for (let i = 0; i < winConditions.length; i++) {
          const [a, b, c] = winConditions[i];
          if (
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent &&
            cells[a].textContent !== ''
          ) {
            // Display the winner
            displayWinner(cells[a].textContent);
            return;
          }
        }
      }

      function displayWinner(winner) {
        alert(winner + ' wins!');
        resetGame();
      }

      function resetGame() {
        // Clear the text content of all cells
        cells.forEach(cell => {
          cell.textContent = '';
          cell.classList.remove("selected");
        });
        // reset the turn to first player
        xIsNext = true;
      }

      cells.forEach(cell => cell.addEventListener('click', handleClick));
