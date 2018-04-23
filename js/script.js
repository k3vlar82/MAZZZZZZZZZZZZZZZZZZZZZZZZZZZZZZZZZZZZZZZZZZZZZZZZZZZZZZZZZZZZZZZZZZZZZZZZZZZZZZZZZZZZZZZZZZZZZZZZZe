window.onload = function () {

    const SIZE = 7;
    const CELL_SIZE = 50;

    var myGrid = [];

    function draww(x, y) {
        var canvas = document.getElementById('mazeCanvas');
        var ctx = canvas.getContext('2d');
        this.maze = myGrid;

        ctx.fillStyle = "white";
        ctx.fillRect(3, 3, CELL_SIZE * SIZE, CELL_SIZE * SIZE);

        if (myGrid[x][y].leftWall) {
            ctx.moveTo(x * CELL_SIZE, y * CELL_SIZE);
            ctx.lineTo(x * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        if (myGrid[x][y].rightWall) {
            ctx.moveTo((x + 1) * CELL_SIZE, y * CELL_SIZE);
            ctx.lineTo((x + 1) * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        if (myGrid[x][y].topWall) {
            ctx.moveTo(x * CELL_SIZE, y * CELL_SIZE);
            ctx.lineTo((x + 1) * CELL_SIZE, y * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        if (myGrid[x][y].bottomWall) {
            ctx.moveTo(x * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.lineTo((x + 1) * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }

    }

    function startEnd() {
        var canvas = document.getElementById('mazeCanvas');
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "red";
        ctx.fillRect(start.x * CELL_SIZE, start.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        ctx.stroke();

        ctx.fillStyle = "purple";
        ctx.fillRect(end.x * CELL_SIZE, end.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        ctx.stroke();
    }


    function Cell(x, y) {
        this.leftWall = true;
        this.rightWall = true;
        this.topWall = true;
        this.bottomWall = true;
        this.x = x;
        this.y = y;
        this.visited = false;
        this.neighborsX = [x - 1, x, x + 1, x];
        this.neighborsY = [y, y + 1, y, y - 1];

        this.left;
        this.right;
        this.up;
        this.down;

        this.startDistance;
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

    function End() {
        this.x = getRandomInt(SIZE);
        this.y = getRandomInt(SIZE);
        if (this.x == start.x) {
            this.x = getRandomInt(SIZE);
        }
        if (this.y == start.y) {
            this.y = getRandomInt(SIZE);
        }
    }

    var end = new End();
    var back = [];

    explore(start.x, start.y, myGrid);
    draww(start.x, start.y);

    function explore(x, y, myGrid) {
        var go;
        var currentCell = myGrid[x][y];
        currentCell.visited = true;

        // var direction;
        // function rand() {
        //     var dir = [0, 1, 2, 3];
        //     dir.
        //     for (var d = 0; d < dir; d++) {
        //         [d] = direction;
        //     }
        // }
        // direction = rand();
        // console.log(direction);
        if (x - 1 >= 0) {
            go = myGrid[x - 1][y];
            if (!go.visited) {
                back.push(go);
                currentCell.leftWall = false;
                go.rightWall = false;
                explore(go.x, go.y, myGrid);
            }
        } if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                back.push(go);
                currentCell.bottomWall = false;
                go.topWall = false;
                explore(go.x, go.y, myGrid);
            }
        } if (y - 1 >= 0) {
            go = myGrid[x][y - 1];
            if (!go.visited) {
                back.push(go);
                currentCell.topWall = false;
                go.bottomWall = false;
                explore(go.x, go.y, myGrid);
            }
        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                back.push(go);
                currentCell.rightWall = false;
                go.leftWall = false;
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
    }

    function drawMaze(Grid) {
        var maze = Grid;
        for (var x = 0; x < SIZE; x++) {
            console.log(maze);
            for (var y = 0; y < SIZE; y++) {
                draww(x, y);
            }
        }
    }
    drawMaze(myGrid);
    startEnd();

    function Work() {
        this.commands = "Make me a maze, a sandwich, and do my laundry";
    }
    var work = new Work();
    console.log(work.commands);

}