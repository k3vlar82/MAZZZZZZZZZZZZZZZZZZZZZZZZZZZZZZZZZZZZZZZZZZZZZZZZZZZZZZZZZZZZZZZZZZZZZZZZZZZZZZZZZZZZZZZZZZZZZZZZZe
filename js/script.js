window.onload = function(){
    console.log("JavaScript is working");
    //use constants for grid size, cell size, canvas size, and directions
    //make a start point object
    //make a finish point object
    //clear and draw functions
    //functions for setting the size, algorithm, and drawing the maze
    //list of all grid points and grid of the points
    //create grid for initializing
    //make a new cell object with a reference to the maze using "this"
    //give cell an x, y and a reference to the maze
    //have a visited and "is start" boolean
    //have a distance from start variable
    //path booleans
    //neighbor locations
    //set neighbor locations with a function and if statements
    //LOTS OF DRAWING
    // DRAW ALL THE CODE    
        const SIZE = 2;
        const CELL_SIZE = 69;
        const LEFT = x--;
        const RIGHT = x++;
        const DOWN = y++;
        const UP = y--;
    
        var myGrid = [];

        var selectedX = 0;
        var selectedY = 0;

    
        for(var y = 0; y < SIZE; y++){
            myGrid[y] = [];
        
            for(var x = 0; x < SIZE; x++){
                myGrid[y][x] = y + "," + x;
            }
        }
    
        console.log(myGrid);

            // if(selectedX == x && selectedY == y){
            //     newCell.style.border = ".5px solid red";
            // }

            redrawGrid();
            
        function redrawGrid(){
            var gridDiv = document.getElementById("grid");
    
         for(var y = 0; y < SIZE; y++){
                var newRow = document.createElement("div");
    
                for(var x = 0; x < SIZE; x++){
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
        }
    }