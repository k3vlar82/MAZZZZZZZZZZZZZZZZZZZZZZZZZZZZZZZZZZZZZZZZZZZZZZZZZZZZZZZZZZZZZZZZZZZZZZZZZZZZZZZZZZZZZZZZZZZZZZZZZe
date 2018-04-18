window.onload = function () {

    const SIZE = 3;
    const CELL_SIZE = 69;

    var myGrid = [];

    function Cell(x, y) {
        // this.walls = ['l', 'r', 'u', 'd'];
        this.leftWall = true;
        this.rightWall = true;
        this.topWall = true;
        this.bottomWall = true;
        this.x = x;
        this.y = y;
        this.visited = false;
        this.neighborsX = [x - 1, x, x + 1, x];
        this.neighborsY = [y, y + 1, y, y - 1];
    }
    redrawGrid();

    console.log(myGrid);

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
    explore(start.x, start.y, myGrid);


    function explore(x, y, myGrid) {
        var go;
        var currentCell = myGrid[x][y];
        currentCell.visited = true;

        console.log(myGrid);

        if (x - 1 >= 0) {

            go = myGrid[x - 1][y];
            if (!go.visited) {
                back.push(go);
                explore(go.x, go.y, myGrid);
            }

        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
        }
        if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
        }
        if (y - 1 >= 0) { 
            go = myGrid[x][y - 1];
            if (!go.visited) {
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
        }
    }

    console.log(back);

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

    function work(){
     var commands = "make me a maze, a sandwich, and do my laundry";
    }
};

