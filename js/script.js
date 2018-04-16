window.onload = function () {
    const SIZE = 4;
    const CELL_SIZE = 69;
    var node = '';
    var rows;
    var columns;
    var box;
    var instance;

    var above = 0;
    var below = 1;
    var left = 2;
    var right = 3;

    var dirs = [0, 1, 2, 3]; // direction of neighbors
    var undirs = [1, 0, 3, 2]; // opposite direction
    var delta = { x: [0, 0, -1, 1], y: [-1, 1, 0, 0] }; // offsets of neighbors

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    function redrawGrid() {
        var gridDiv = document.getElementById("grid");
        
        for (var y = 0; y < SIZE; y++) {
            var newRow = document.createElement("div");
            
            for (var x = 0; x < SIZE; x++) {
                var newCell = document.createElement("div");
                
                newCell.style.height = CELL_SIZE + "px";
                newCell.style.width = CELL_SIZE + "px";
                newCell.style.backgroundColor = "#abcdef";
                newCell.style.color = "#123456";
                newCell.style.display = "inline-block";
                newCell.style.border = "solid .5px black";
                newCell.style.textAlign = "center";
                newCell.textContent = y + "," + x;

                newRow.appendChild(newCell);
            }
            
            gridDiv.appendChild(newRow);
        }
        console.log(gridDiv);

     var myGrid = [];

     for(var y = 0; y < SIZE; y++){
        myGrid[y] = [];
    
        for(var x = 0; x < SIZE; x++){
            myGrid[y][x] = y + "," + x;
        }
     }
     console.log(myGrid);
        
        if (SIZE % 2 == 0) {
            //even numbers
            if (x % 2 == 1 && y % 2 == 1) {
                [x][y] = node;
            }
        } else if (SIZE % 2 == 1) {
            //odd numbers
            if (x % 2 == 1 && y % 2 == 1) {
                [x][y] = node;
            }
        }
        
    }
    redrawGrid();
}