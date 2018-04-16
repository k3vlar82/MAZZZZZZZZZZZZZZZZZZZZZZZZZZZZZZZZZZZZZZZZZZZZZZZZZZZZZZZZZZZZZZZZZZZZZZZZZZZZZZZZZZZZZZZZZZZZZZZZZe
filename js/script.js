window.onload = function () {

    var rows = 3;
    var columns = 3;
    var box;
    var instance;
    var side;

    var above = 0;
    var below = 1;
    var left = 2;
    var right = 3;

    function Cell(x, y) {
        this.walls = ['l', 'r', 'u', 'd'],
            this.x = x;
        this.y = y;
        this.visited = false;
        this.neighborsX = [x - 1, x, x + 1, x];
        this.neighborsY = [y, y + 1, y, y - 1];
    }

    function neighbor() {

    }

    const SIZE = 2;
    const CELL_SIZE = 69;
    var node = '';

    function maze() {
        this.rows;
        this.columns;
        this.SIZE;
        this.CELL_SIZE;
        this.neighbors;
        this.side;

    }

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    redrawGrid();

    function redrawGrid(maze, stack) {
        var gridDiv = document.getElementById("grid");

        for (var y = 0; y < SIZE; y++) {
            var newRow = document.createElement("div");

            for (var x = 0; x < SIZE; x++) {
                var newCell = new Cell[x][y];



                side.remove();
                return maze.visitedCount;


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

    }


    function remove() {
        if (side == 0) {
            newCell.style.borderTop = "solid .5px #abcdef";
        } if (side == 1) {
            newCell.style.borderBottom = "solid .5px #abcdef";
        } if (side == 2) {
            newCell.style.borderLeft = "solid .5px #abcdef";
        } if (side == 3) {
            newCell.style.borderRight = "solid .5px #abcdef";
        }
    }


}


