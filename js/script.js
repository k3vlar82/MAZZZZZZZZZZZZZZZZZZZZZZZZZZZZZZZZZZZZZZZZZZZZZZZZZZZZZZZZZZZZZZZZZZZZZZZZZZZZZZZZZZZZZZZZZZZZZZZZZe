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

    explore(start.x, start.y, myGrid);


    function explore(x, y, myGrid) {
        var go = myGrid[start.x][start.y];
        // var cell = myGrid[x][y];
        // cell.visited = true;

        // If I can go left
        // go = left
        // If !left.visisted
        // explore(left.x,left.y, myGrid)
        // If can go right
        // fi can go up
        // if can go down

        // var direction = Math.floor(Math.random() * 4);
        // console.log(direction);
        console.log(go);
        var count = 0
        if (x - 1 >= 0) {
            left(start.x, start.y);


            if (!go.visited) {
                right(start.x, start.y);
            } else if (!go.visited) {
                down(start.x, start.y);
            } else if (!go.visited) {
                up(start.x, start.y);
            } else {
                back.pop();
            }
            go.visited = true;
            back.push(go);
            explore(start.x, start.y, myGrid);
        } else if (x + 1 < SIZE) {
            console.log(go);
            right(start.x, start.y);

            if (!go.visited) {
                right(go.x, go.y);
            } else if (!go.visited) {
                down(go.x, go.y);
            } else if (!go.visited) {
                up(go.x, go.y);
            } else {
                back.pop();
            }
            go.visited = true;
            back.push(go);
            explore(go.x, go.y, myGrid);
        } else if (y + 1 < SIZE) {
            console.log(go);
            down(go.x, go.y);

            if (!go.visited) {
                right(go.x, go.y);
            } else if (!go.visited) {
                down(go.x, go.y);
            } else if (!go.visited) {
                up(go.x, go.y);
            } else {
                back.pop();
            }
            go.visited = true;
            back.push(go);
            explore(go.x, go.y, myGrid);
        } else if (y - 1 >= 0) {
            console.log(go);
            up(go.x, go.y);

            if (!go.visited) {
                right(go.x, go.y);
            } else if (!go.visited) {
                down(go.x, go.y);
            } else if (!go.visited) {
                up(go.x, go.y);
            } else {
                back.pop();
            }

            go.visited = true;
            back.push(go);
            explore(go.x, go.y, myGrid);
        }
        // else if (go.visited) {
        //     back.pop();
        //     explore(cell.x, cell.y, myGrid);
        // }
    }

    console.log(back);
    // if (!visited) {
    //     explore(go.x, go.y, myGrid);
    // }
    // console.log(go);
    // if (visited == true) {
    //     explore(go.x, go.y, myGrid);
    // }

    //((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    function redrawGrid() {
        for (var x = 0; x < SIZE; x++) {
            myGrid[x] = [];

            for (var y = 0; y < SIZE; y++) {
                myGrid[x][y] = new Cell(x, y);

            }
        }

    }

    function left(x, y) {
        var go = myGrid[x][y];
        go = myGrid[x - 1][y];
        if (!go.visited) {
            go.visited = true;
            back.push(go);
        }


    }

    function right(x, y) {
        var go = myGrid[x][y];
        go = myGrid[x + 1][y];
        if (!go.visited) {
            go.visited = true;
            back.push(go);
        }
    }

    function up(x, y) {
        var go = myGrid[x][y];
        go = myGrid[x][y - 1];
        if (!go.visited) {
            go.visited = true;
            back.push(go);
        }
    }

    function down(x, y) {
        var go = myGrid[x][y];
        go = myGrid[x][y + 1];
        if (!go.visited) {
            go.visited = true;
            back.push(go);
        }
    }
};

// function work(){
//  make me a maze, a sandwitch, and do my laundry
// } alert("something cool");
