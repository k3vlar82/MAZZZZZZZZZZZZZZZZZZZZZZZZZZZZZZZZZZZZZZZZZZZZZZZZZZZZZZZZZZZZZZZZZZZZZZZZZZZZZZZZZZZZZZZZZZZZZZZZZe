window.onload = function () {

    const SIZE = 6;
    const CELL_SIZE = 69;
    
    var myGrid = [];

    var back = [start];

    function Cell(x, y) {
        this.walls = ['l', 'r', 'u', 'd'];
        this.x = x;
        this.y = y;
        this.visited = false;
        this.neighborsX = [x - 1, x, x + 1, x];
        this.neighborsY = [y, y + 1, y, y - 1];
    }
    var visited = false;
    redrawGrid();

    var start = myGrid[getRandomInt(SIZE)][getRandomInt(SIZE)];
    console.log(start);

    if (!visited) {
        explore(getRandomInt(SIZE), getRandomInt(SIZE), myGrid);
        visited = true;
    }


    function explore(x, y, myGrid) {
        var go;

        //console.log(myGrid);
        cell = myGrid[x][y];
        while (!visited) {
            if (!visited) {
                var direction = Math.floor(Math.random() * 4);
                console.log(direction);
                console.log(myGrid[y][x]);
                if (direction == 0 && x > 0) {
                        go = myGrid[x - 1][y];
                    back.push();
                } else if (direction == 1 && x < SIZE) {
                    go = myGrid[x + 1][y];
                    back.push();
                } else if (direction == 2 && y < SIZE) {
                    go = myGrid[x][y + 1];
                    back.push();
                } else if (direction == 3 && y > 0) {
                    go = myGrid[x][y - 1];
                    back.push();
                }
                cell.visited = true;
                console.log(go);
                explore(go.x, go.y, myGrid);
            }
            back.pop();
        }

    };

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    function redrawGrid() {

        // var gridDiv = document.getElementById("grid");
        // for (var y = 0; y < SIZE; y++) {
        //     var newRow = document.createElement("div");

        //     for (var x = 0; x < SIZE; x++) {
        //         var newCell = document.createElement("div");

        //         newCell.style.height = CELL_SIZE + "px";
        //         newCell.style.width = CELL_SIZE + "px";
        //         newCell.style.backgroundColor = "#abcdef";
        //         newCell.style.color = "#123456";
        //         newCell.style.display = "inline-block";
        //         newCell.style.border = "solid .5px black";
        //         newCell.style.textAlign = "center";
        //         newCell.textContent = y + "," + x;

        //         newRow.appendChild(newCell);
        //     }
        //     gridDiv.appendChild(newRow);
        // }

        for (var x = 0; x < SIZE; x++) {
            myGrid[x] = [];

            for (var y = 0; y < SIZE; y++) {
                myGrid[x][y] = new Cell(x, y);

            }
        }

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}

// function work(){
//  make me a maze, a sandwitch, and do my laundry
// } alert("something cool");
