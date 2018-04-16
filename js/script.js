window.onload = function () {
    const SIZE = 2;
    const CELL_SIZE = 69;
    var node = '';

    ((Math.floor(Math.random((SIZE - 1) / 2))) * 2) + 1;
    redrawGrid();
    function redrawGrid() {
        var gridDiv = document.getElementById("grid");

        for (var y = 0; y < SIZE; y++) {
            var newRow = document.createElement("div");

            for (var x = 0; x < SIZE; x++) {
                var newCell = document.createElement("div");

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
        if(SIZE % 2 == 0){
            //even numbers
            if(x % 2 == 1 && y % 2 == 1){
                [x][y] = node;
            }
        } else if (SIZE % 2 == 1){
            //odd numbers
            if(x % 2 == 1 && y % 2 == 1){
                [x][y] = node;
            }
        }

    }

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
    }

   
}


