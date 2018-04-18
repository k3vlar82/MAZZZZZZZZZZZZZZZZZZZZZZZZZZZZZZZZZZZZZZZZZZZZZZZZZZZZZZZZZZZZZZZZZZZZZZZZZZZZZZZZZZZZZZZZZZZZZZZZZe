window.onload = function () {

    const SIZE = 3;
    const CELL_SIZE = 69;

//canvas size = cell-size*size

    var myGrid = [];

    function Cell(x, y) {
        this.walls = ['l', 'r', 'u', 'd'];
        this.x = x;
        this.y = y;
        this.visited = false;
        this.neighborsX = [x - 1, x, x + 1, x];
        this.neighborsY = [y, y + 1, y, y - 1];

        this.startDistance;

        this.left;
        this.right;
        this.up;
        this.down;
    }
    //var visited = false;
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
        var go = myGrid[start.x][start.y];
        var directions = [0, 1, 2, 3];
        // var cell = myGrid[x][y];
        // cell.visited = true;

        // If I can go left
        // go = left
        // If !left.visisted
        // explore(left.x,left.y, myGrid)
        // If can go right
        // fi can go up
        // if can go down
        for (var i = 0; i < directions.length; i++) {
            //var direction = Math.floor(Math.random() * 4);
          //  console.log(directions);
            //  console.log(myGrid[x][y]);
           // console.log(go);
            if (directions[i] == 0 && x - 1 >= 0) {
                var go = myGrid[start.x][start.y];
                 go = myGrid[x - 1][y];
                left(go.x, go.y);
                console.log(go);
                back.push(go);
                explore(go.x, go.y, myGrid);
            }  if (directions[i] == 1 && x + 1 < SIZE) {
                var go = myGrid[start.x][start.y];
                 go = myGrid[x + 1][y];
                right(go.x, go.y);
                console.log(go);
                back.push(go);
                explore(go.x, go.y, myGrid);
            }  if (directions[i] == 2 && y + 1 < SIZE) {
                var go = myGrid[start.x][start.y];
                 go = myGrid[x][y + 1];
                down(go.x, go.y);
                console.log(go);
                back.push(go);
                explore(go.x, go.y, myGrid);
            }  if (directions[i] == 3 && y - 1 >= 0) {
                var go = myGrid[start.x][start.y];
                 go = myGrid[x][y - 1];
                up(go.x, go.y);
                console.log(go);
                back.push(go);
                explore(go.x, go.y, myGrid);
            }
            // else {
            //     back.pop();
            //     explore(go.x, go.y, myGrid);
            // }
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
        //var go = myGrid[x][y];
        var go = myGrid[x - 1][y];
        // if (!go.visited) {
        go.visited = true;
        back.push(go);
        // }
    }

    function right(x, y) {
        // var go = myGrid[x][y];
        var go = myGrid[x + 1][y];
        // if (!go.visited) {
        go.visited = true;
        back.push(go);
    }

    function up(x, y) {
        //var go = myGrid[x][y];
        var go = myGrid[x][y - 1];
        // if (!go.visited) {
        go.visited = true;
        back.push(go);
    }

    function down(x, y) {
        // var go = myGrid[x][y];
        var go = myGrid[x][y + 1];
        // if (!go.visited) {
        go.visited = true;
        back.push(go);
    }

}
