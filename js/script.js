window.onload = function () {

    const SIZE = 50;
    const CELL_SIZE = 5;

    var myGrid = [];

    function draww(x, y) {
        var canvas = document.getElementById('mazeCanvas');
        var ctx = canvas.getContext('2d');
        this.maze = myGrid;

        ctx.height = CELL_SIZE * SIZE + "px";
        ctx.width = CELL_SIZE * SIZE + "px";
        ctx.fillStyle = "white";
        ctx.fillRect(3, 3, CELL_SIZE * SIZE, CELL_SIZE * SIZE);

        if (myGrid[x][y].leftWall) {
            // ctx.beginPath();
            ctx.moveTo(x * CELL_SIZE, y * CELL_SIZE);
            ctx.lineTo(x * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        if (myGrid[x][y].rightWall) {
            // ctx.beginPath();
            ctx.moveTo((x + 1) * CELL_SIZE, y * CELL_SIZE);
            ctx.lineTo((x + 1) * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        if (myGrid[x][y].topWall) {
            // ctx.beginPath();
            ctx.moveTo(x * CELL_SIZE, y * CELL_SIZE);
            ctx.lineTo((x + 1) * CELL_SIZE, y * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        if (myGrid[x][y].bottomWall) {
            // ctx.beginPath();
            ctx.moveTo(x * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.lineTo((x + 1) * CELL_SIZE, (y + 1) * CELL_SIZE);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        
    }

    function startEnd(){
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
        if(this.x == start.x){
            this.x = getRandomInt(SIZE);
        }
        if(this.y == start.y){
            this.y = getRandomInt(SIZE);
        }
    }

    var end = new End();
    // draww(end.x, end.y);
    // console.log(end);


    var back = [];

    explore(start.x, start.y, myGrid);
    draww(start.x, start.y);


    function explore(x, y, myGrid) {
        var go;
        var currentCell = myGrid[x][y];
        currentCell.visited = true;

        // console.log(myGrid);

        if (x - 1 >= 0) {

            go = myGrid[x - 1][y];
            if (!go.visited) {
                currentCell.leftWall = false;
                go.rightWall = false;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            // draww(go.x, go.y);

        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                currentCell.rightWall = false;
                go.leftWall = false;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            // draww(go.x, go.y);
        }
        if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                currentCell.bottomWall = false;
                go.topWall = false;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            // draww(go.x, go.y);
        }
        if (y - 1 >= 0) {
            go = myGrid[x][y - 1];
            if (!go.visited) {
                currentCell.topWall = false;
                go.bottomWall = false;
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            // draww(go.x, go.y);
        }
        // draww(go.x, go.y);
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
        this.commands = "make me a maze, a sandwich, and do my laundry";
    }
    var work = new Work();
    console.log(work.commands);
};
