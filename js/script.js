window.onload = function () {

    const SIZE = 6;
    const CELL_SIZE = 69;

    var myGrid = [];



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

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function Start() {
        this.x = getRandomInt(SIZE);
        this.y = getRandomInt(SIZE);
    }

    var start = new Start();

    console.log(start.x);

    var back = [start];

    if (!visited) {
        explore(start.x, start.y, myGrid);
        visited = true;
    }


    function explore(x, y, myGrid) {
        var go;

        //console.log(myGrid);
        var cell = myGrid[x][y];
        cell.visited = true;

        // If I can go left
             // go = left
             // If !left.visisted
                 // explore(left.x,left.y, myGrid)
        // If can go right
        // fi can go up
        // if can go down

        //var direction = Math.floor(Math.random() * 4);
        console.log(myGrid[y][x]);
        if (direction == 0 && x > 0) {
            cell.visited = true;
            go = myGrid[x - 1][y];
            back.push();
        } else if (direction == 1 && x < SIZE) {
            cell.visited = true;
            go = myGrid[x + 1][y];
            back.push();
        } else if (direction == 2 && y < SIZE) {
            cell.visited = true;
            go = myGrid[x][y + 1];
            back.push();
        } else if (direction == 3 && y > 0) {
            cell.visited = true;
            go = myGrid[x][y - 1];
            back.push();
        }

        if (!visited) {
            explore(go.x, go.y, myGrid);
        }
        console.log(go);
        if (visited == true) {
            back.pop();
            explore(go.x, go.y, myGrid);
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

}

// function work(){
//  make me a maze, a sandwitch, and do my laundry
// } alert("something cool");
