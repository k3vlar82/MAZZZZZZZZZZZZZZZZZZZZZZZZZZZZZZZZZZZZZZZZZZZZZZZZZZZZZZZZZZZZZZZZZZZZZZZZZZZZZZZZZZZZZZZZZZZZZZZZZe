window.onload = function () {
    const SIZE = 2;
    const CELL_SIZE = 69;
    var node = '';

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    redrawGrid();
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
        if(SIZE % 2 == 0){
            //even numbers
            if(x % 2 == 1 && y % 2 == 1){
                [x][y] = node;
            }
        } else if (SIZE % 2 == 1){
            //odd numbers
            if(x % 2 == 1 && y % 2 == 1){
                [x][y] = node;
            }
        }

    }
}
