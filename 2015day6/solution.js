// how to represent grid?

function makeGrid(rows, columns, defaultValue){

  // grid starts as an empty array
  var grid = [];

  for(var i = 0; i < rows; i++){
    // make one empty row
    grid.push([]);
    // add columns to the empty row
    grid[i].push(new Array(columns));

    for(var j=0; j < columns; j++){
      // set default value for each light
      grid[i][j] = defaultValue;
    }
  }

return grid;
}

//test grid
var grid1 = makeGrid(2, 3, 'p'); // 2 rows, 3 columns filled with 'p'
var grid2 = makeGrid(10, 5, 0); // 10 rows, 5 columns filled with 0
var grid3 = makeGrid(51, 51, 'B');

// print grid to console (FOR TESTING ONLY - grid must be < 50 x 50)
function printTestGrid(grid) {
  var tooBigError = 'Error: grid > 50 lights wide or tall';
  if (grid.length > 50) {
    console.log(tooBigError);
    return;
  }
  for (var i = 0; i < grid.length; i++) {
    if (grid[i].length > 50) {
      console.log(tooBigError);
      return;
    }
    var thisRow = '';
    for (var j = 0; j < grid[i].length; j++) {
      var thisLight = grid[i][j] + ' ';
      thisRow += thisLight;
    }
    console.log(thisRow);
  }
}

printTestGrid(grid1);
printTestGrid(grid2);
printTestGrid(grid3);

// read input file
// parse line by line
// translate each line into a method call to

// turn on method

// turn off method

// toggle method

// count lit lights method

// display result
