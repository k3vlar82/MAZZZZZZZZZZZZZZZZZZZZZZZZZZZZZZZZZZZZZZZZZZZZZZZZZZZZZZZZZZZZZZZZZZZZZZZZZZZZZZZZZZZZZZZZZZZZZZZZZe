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

    console.log(start.x, start.y);

    var back = [];

    // if (!visited) {
    explore(start.x, start.y, myGrid);
    //     visited = true;
    // }


    function explore(x, y, myGrid) {
        var go = myGrid[x][y];

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

        var direction = Math.floor(Math.random() * 4);
        console.log(myGrid[x][y]);
        if (direction == 0 && x - 1 >= 0) {
            go = myGrid[x - 1][y];
            if (!go.visited) {
                go.visited = true;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            else if (go.visited) {
                explore(cell.x, cell.y, myGrid);
               // back.pop();
            }
        } else if (direction == 1 && x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                go.visited = true;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            else if (go.visited) {
              //  back.pop();
                explore(cell.x, cell.y, myGrid);
            }
        } else if (direction == 2 && y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                go.visited = true;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            else if (go.visited) {
             //   back.pop();
                explore(cell.x, cell.y, myGrid);
            }
        } else if (direction == 3 && y - 1 >= 0) { // y is 0 - goes to this, pops last cell, goes back to this
            go = myGrid[x][y - 1];
            if (!go.visited) {
                go.visited = true;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            else if (go.visited) {
              //  back.pop();
                explore(cell.x, cell.y, myGrid);
            }
        }

        console.log(back);
        // if (!visited) {
        //     explore(go.x, go.y, myGrid);
        // }
        // console.log(go);
        // if (visited == true) {
        //     explore(go.x, go.y, myGrid);
        // }





    };

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    function redrawGrid() {
        for (var x = 0; x < SIZE; x++) {
            myGrid[x] = [];

            for (var y = 0; y < SIZE; y++) {
                myGrid[x][y] = new Cell(x, y);

            }
        }
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
    }

}
// function work(){
//  make me a maze, a sandwitch, and do my laundry
// } alert("something cool");
