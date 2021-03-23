// After dimensions are submitted by user, construct the desired grid
function makeGrid(event){
    // Prevent default action of submitting form to url/server
    event.preventDefault()
    // New grid is build on table #pixelCanvas
    const gridTable = document.getElementById('pixelCanvas');
    // Check for an existing grid
    const oldTable = document.getElementsByTagName('tbody');
    // If a grid was created previously, delete it
    if (oldTable.length > 0) {
        gridTable.removeChild(oldTable[0]);
    };
    // Determine new grid dimensions using form #inputWidth (x) and #inputHeight (y)
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
colorGrid.addEventListener('click', function(event) {
    // Verify that user specified an single cell (<td>)
    if (event.target.nodeName === 'TD') {
        // Verify current color selection
        const color = document.querySelector('#colorPicker').value;
        // Add background color to selected cell of table
        event.target.style.backgroundColor = color; 
    };
}, false);
