// Fill a grid square with selected color
function colorCell (event) {
    // Verify current color selection
    const color = document.querySelector('#colorPicker').value;
    // Add background color to selected cell of table
    event.target.style.backgroundColor = color; 
};

// When size is submitted by the user, call makeGrid()
function makeGrid(event){
    // Prevent default action of submitting form to url/server
    event.preventDefault()
    // New grid is build on table #pixelCanvas
    const gridTable = document.getElementById('pixelCanvas');
    // Determine grid dimensions using form #inputWidth (x) and #inputHeight (y)
    const gridColumns = document.querySelector('#inputWidth').value;
    const gridRows = document.querySelector('#inputHeight').value;
    for (let r = 0; r < gridRows; r++) {
        let addRow = gridTable.insertRow(r);
        for (let c = 0; c < gridColumns; c++) {
            let addCell = addRow.insertCell(c);
        };
    }; 
};

// Generate specified grid when form #sizePicker is submitted ('Create Blank Grid' button pressed)
const createGrid = document.querySelector('#sizePicker');
createGrid.addEventListener('submit', makeGrid, false);

// Add color to cells in grid
const colorGrid = document.querySelector('#pixelCanvas');
colorGrid.addEventListener('click', colorCell, false);
