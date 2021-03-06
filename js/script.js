var time = 0;
const SIZE = 10;
const CELL_SIZE = 30;
var ctx;
window.onload = function () {
    var canvas = document.getElementById('mazeCanvas');
    ctx = canvas.getContext('2d');
    drawMaze(myGrid);
    startEnd();
    // draww();
}
var myGrid = [];
function draww(x, y) {

    this.maze = myGrid;

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, CELL_SIZE * SIZE, CELL_SIZE * SIZE);

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
        ctx.strokeStyle = "purple";
        ctx.stroke();
    }

}

function startEnd() {
    var canvas = document.getElementById('mazeCanvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "blue";
    ctx.fillRect(start.x * CELL_SIZE, start.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fillRect(end.x * CELL_SIZE, end.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.stroke();
}

function drawPlayer() {
    var canvas = document.getElementById('mazeCanvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgba(225, 105, 180, 0.5)";
    ctx.fillRect(start.x * CELL_SIZE, start.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
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
    this.count = 0;
    //this.distance
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
    //counting distance (didn't work)
    // this.x = back[(SIZE*SIZE)-1].x;
    // this.y = back[(SIZE*SIZE)-1].y;
}

var end = new End();
var back = [];

explore(start.x, start.y, myGrid);
//var draw = draww(start.x, start.y);

function explore(x, y, myGrid) {
    var go;
    var currentCell = myGrid[x][y];
    currentCell.visited = true;
    // var count = 0;
    var direction = getRandomInt(3);
    if (direction == 0) {
        if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.bottomWall = false;
                go.topWall = false;
                // go.count+=1;
            }
            explore(go.x, go.y, myGrid);
        }
        if (x - 1 >= 0) {
            go = myGrid[x - 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.leftWall = false;
                go.rightWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.rightWall = false;
                go.leftWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        } if (y - 1 >= 0) {
            go = myGrid[x][y - 1];
            if (!go.visited) {
                back.push(go);
                // count++;
                currentCell.topWall = false;
                go.bottomWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
    }
    if (direction == 1) {
        if (x - 1 >= 0) {
            go = myGrid[x - 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.leftWall = false;
                go.rightWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.bottomWall = false;
                go.topWall = false;
                // go.count+=1;
            }
            explore(go.x, go.y, myGrid);
        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.rightWall = false;
                go.leftWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (y - 1 >= 0) {
            go = myGrid[x][y - 1];
            if (!go.visited) {
                back.push(go);
                // count++;
                currentCell.topWall = false;
                go.bottomWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
    }
    if (direction == 2) {
        if (y - 1 >= 0) {
            go = myGrid[x][y - 1];
            if (!go.visited) {
                back.push(go);
                // count++;
                currentCell.topWall = false;
                go.bottomWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (x - 1 >= 0) {
            go = myGrid[x - 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.leftWall = false;
                go.rightWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.rightWall = false;
                go.leftWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.bottomWall = false;
                go.topWall = false;
                // go.count+=1;
            }
            explore(go.x, go.y, myGrid);
        }
    }
    if (direction == 3) {
        if (y + 1 < SIZE) {
            go = myGrid[x][y + 1];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.bottomWall = false;
                go.topWall = false;
                // go.count+=1;
            }
            explore(go.x, go.y, myGrid);
        }

        if (x - 1 >= 0) {
            go = myGrid[x - 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.leftWall = false;
                go.rightWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
        if (x + 1 < SIZE) {
            go = myGrid[x + 1][y];
            if (!go.visited) {
                // count++;
                back.push(go);
                currentCell.rightWall = false;
                go.leftWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        } if (y - 1 >= 0) {
            go = myGrid[x][y - 1];
            if (!go.visited) {
                back.push(go);
                // count++;
                currentCell.topWall = false;
                go.bottomWall = false;
                // go.count+=1;
                explore(go.x, go.y, myGrid);
            }
        }
    }
    Cell.count == back.length;
    for (var a = 0; a < back.length; a++) {
        for (var b = 0; b < back.length; b++) {

        }
    }
    // console.log(count);
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

function Work() {
    this.commands = "Make me a maze, a sandwich, and do my laundry";
}
var work = new Work();
console.log(work.commands);

function moveLeft() {
    //  var box = start.getElementById('grid');
    //box.style.left = parseInt(box.style.left) - CELL_SIZE + "px";
    start.x = start.x - 1;
    drawPlayer();
}
function moveRight() {
    // var box = start.getElementById('grid');
    //  b//ox.style.left = parseInt(box.style.left) + CELL_SIZE + "px";
    start.x = start.x + 1;
    drawPlayer();
}
function moveUp() {
    // var box = start.getElementById('grid');
    //  box.style.up = parseInt(box.style.up) - CELL_SIZE + "px";
    start.y = start.y - 1;
    drawPlayer();
}
function moveDown() {
    // var box = start.getElementById('grid');
    //box.style.up = parseInt(box.style.up) + CELL_SIZE + "px";
    start.y = start.y + 1;
    drawPlayer();

}

var player = function Player(x, y) {
    this.player.x = x;
    this.player.y = y;
    this.left;
    this.right;
    this.up;
    this.down;
}

drawMaze(myGrid);
startEnd();

function Work() {
    this.commands = "Make me a maze, a sandwich, and do my laundry";
}

var work = new Work();
console.log(work.commands);

function solve(Grid) {
    for (var x = 0; x < SIZE; x++) {
        for (var y = 0; y < SIZE; y++) {
            if (this.go.visited[x][y] == true) {
                this.go.fillStyle == 'pink';
                this.go.fillRect(x * CELL_SIZE, y * CELL_SIZE, 10, 10)
            }
        }
    }
    if (Cell.x == this.end.x && Cell.y == this.end.y) {
        while (currentCell.parent) {
            back.push(currentCell);
            currentCell = currentCell.parent;
        }
    }
    for (var i in this.solve) {
        this.context.fillRect(this.solve[i].x * CELL_SIZE, this.solve[i].y * CELL_SIZE, 10, 10);
    }
}
function moving() {
    player.x = Cell.x;
    player.y = Cell.y;
    var timer = setInterval(setTime, 1000);
    //  console.log("I work!");
    document.onkeydown = move;
    if (player.x == end.x && player.y == end.y) {
        somethingCool();
    }
}

function move(evt) {
    if (evt.keyCode == 37) {
        // console.log(currentCell.x, currentCell.y);
        moveLeft();
    } else if (evt.keyCode == 38) {
        // console.log('up');
        moveUp();
    } else if (evt.keyCode == 39) {
        // console.log('right');
        moveRight();
    } else if (evt.keyCode == 40) {
        //  console.log('down');
        moveDown();
    }
}

function somethingCool() {
    alert('reeeeeeeeeeeeeeee');
}


function setTime() {
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    time++;
    seconds.textContent = pad(time % 60);
    minutes.textContent = pad(parseInt(time / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return ("0" + valString);
    } else {
        return valString;
    }
}
