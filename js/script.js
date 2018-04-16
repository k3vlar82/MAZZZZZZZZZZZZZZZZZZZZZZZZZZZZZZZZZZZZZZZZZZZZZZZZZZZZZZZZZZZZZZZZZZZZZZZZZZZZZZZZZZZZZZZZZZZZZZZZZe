window.onload = function () {


    var rows = 3;
    var columns = 3;
    var box;
    var instance;
    var side;
    
    var above = 0;
    var below = 1;
    var left  = 2;
    var right = 3;
    
    var dirs   = [0,1,2,3]; // direction of neighbors
    var undirs = [1,0,3,2]; // opposite direction
    var delta  = { x:[0, 0,-1, 1], y:[-1, 1, 0, 0] }; // offsets of neighbors
    

    const SIZE = 2;
    const CELL_SIZE = 69;
    var node = '';
    // var cell = {
    // };

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    redrawGrid();
    function redrawGrid(maze, stack) {
        var gridDiv = document.getElementById("grid");

        for (var y = 0; y < SIZE; y++) {
            var newRow = document.createElement("div");

            for (var x = 0; x < SIZE; x++) {
                var newCell = document.createElement("div");




                function dfs(maze, stack)
                {
                    var cell = stack.peek();
                
                    x = cell.x;
                    y = cell.y;
                    neighbors = cell.neighbors;
                
                    // when all cells have been visited at least once, it's done
                    if(maze.cells[x][y].visited == false)
                    {
                        maze.cells[x][y].visited = true;
                        maze.visitedCount++;
                    }
                
                    /* look for a neighbor that is in the maze and hasn't been visited yet */
                    while(neighbors.length > 0)
                    {
                        dir = neighbors.pop();
                        if(neighbors.length == 0)
                        {
                            stack.pop(); // all neighbors checked, done with this one.
                        }
                
                        dx = x + delta.x[dir];
                        dy = y + delta.y[dir];
                        if(dx >= 0 && dy >= 0 && dx < columns && dy < rows)
                        {
                            if(maze.cells[dx][dy].visited == false)
                            {
                                /* break down the wall between them. The new neighbor */
                                /* is pushed onto the stack and becomes the new current cell */
                                maze.cells[x][y].wall[dir] = false;
                                maze.cells[dx][dy].wall[undirs[dir]] = false;
                                stack.push( { x: dx, y: dy, neighbors: dirs.shuffle() } );
                                break;
                            }
                        }
                    }
                    
                    return maze.visitedCount; // when visited count == row * columns it's done
                

                newCell.style.height = CELL_SIZE + "px";
                newCell.style.width = CELL_SIZE + "px";
                newCell.style.backgroundColor = "#abcdef";
                newCell.style.color = "#123456";
                newCell.style.display = "inline-block";
                newCell.style.border = "solid .5px black";
                newCell.style.textAlign = "center";
                newCell.textContent = y + "," + x;

                newRow.appendChild(newCell);
            }

            gridDiv.appendChild(newRow);
        }
       
    }

   function maze(){
    this.rows;
    this.columns;
    this.SIZE;
    this.CELL_SIZE;
    this.neighbors;

   }

   function remove(){
    if(side == 0){
    newCell.style.borderTop = "solid .5px #abcdef";
    } if (side == 1){
        newCell.style.borderBottom = "solid .5px #abcdef";
    } if (side == 2){
        newCell.style.borderLeft = "solid .5px #abcdef";
    } if (side == 3) {
        newCell.style.borderRight = "solid .5px #abcdef";
    }
   }

   
}


