const SIZE = 10;
const CELL_SIZE = 50;

var myGrid = [];
window.onload = function () {

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
            ctx.strokeStyle = "blue";
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

//    console.log(back);

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


    function moveLeft() {
        var box = start.getElementById('grid');
        box.style.left = parseInt(box.style.left) - CELL_SIZE + "px";
    }
    function moveRight() {
        var box = start.getElementById('grid');
        box.style.left = parseInt(box.style.left) + CELL_SIZE + "px";
    }
    function moveUp() {
        var box = start.getElementById('grid');
        box.style.up = parseInt(box.style.up) - CELL_SIZE + "px";
    }
    function moveDown() {
        var box = start.getElementById('grid');
        box.style.up = parseInt(box.style.up) + CELL_SIZE + "px";
    }


    drawMaze(myGrid);
    startEnd();
    function Work() {
        this.commands = "Make me a maze, a sandwich, and do my laundry";
    }
    var work = new Work();
    console.log(work.commands);

}

function solve(Grid) {
    for (var x = 0; x < SIZE; x++) {
        for (var y = 0; y < SIZE; y++) {
            if (this.go.visited[x][y] == true) {
                this.go.fillStyle == 'pink';
                this.go.fillRect(x * CELL_SIZE, y * CELL_SIZE, 10, 10)
            }
        }
    }
}
function moving() {
    window.addEventListener('onkeydown', move);
}
function move(event) {
    if (onkeydown == 37) {
        moveLeft();
    } else if (onkeydown == 38) {
        moveUp();
    } else if (onkeydown == 39) {
        moveRight();
    } else if (onkeydown == 40) {
        moveDown();
    }
}