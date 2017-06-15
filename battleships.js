// This is the controller
$(document).ready(function(){
  tableLoop();
  boardData();
  callShip();
// This is the click to change color to red and counts torpedos
  $("td").click(function() {
    // This splits the class into coordinates
    var split = $(this).attr('class').split("");
    var row = split[0];
    var column = split[1];
    console.log(split);
    //checks for a hit and changes color to red
    if (board[row][column] === ship) {
      console.log('HIT!');
      hits++;
      $(this).css("background-color", "red");
      // $(this).addClass("hit");
      if (hits === 5){
        console.log("You win!");
      }
    }
    //checks for a miss and changes color to blue
    else{
      console.log("MISS!");
      $(this).css("background-color", "#00c0ff");
      if(torpedos === 0){
        console.log("You lose!!");
        $(".shipLocation").css("border-color", "red");
      }
    }
      $("#torpedos").text("Torpedos Remaining: " + torpedos--);
      $(this).off("click");
  });
});

// This is the model
// fucntion to makle the table 10 x 10
var torpedos = 0;
var hits;
var board = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];
const ship = 1
function tableLoop() {
  var table = $("<table> </table>");
  // loop to make rows
  for (i = 0; i < 10; i++) {
    var row = $("<tr></tr>").addClass([i]);
    $(table).append(row);
    // loop to make 100 td
      for (var j = 0; j < 10; j++) {
        var stuff = $("<td></td>").addClass([i] + [j]);
        $(row).append(stuff);
      }
  }
  // adding table to html
  $(".board").append(table);
}
function boardData() {
  for(var i= 0; i < 10; i++) {
    for(var j=1; j < 10; j++){
      board[i][j] = 0;
    }
  }
}

/**
 * Create 5 ships in the board array
 **/
 var counter = 0
function callShip() {
    for (var i=0; i<5; i++){
    // Do-while loop for the random numbers while board position is equal to 1
    do {
      var column = Math.floor(Math.random() * 10);
      var row = Math.floor(Math.random() * 10);
      // if
      console.log("row is " + row);
      console.log("column is " + column);
    } while (board[row][column] === 1)
    board[row][column]  = ship;
    checkSpace(row, column)
    console.log(counter)
    var pop = "." + row + column;
    $(pop).addClass('shipLocation');
    }
  console.log(board);
}

// function checkSpace(row, column) {
//   var negativeRow = row
//   var negativeColumn = column
//   var positiveRow = row
//   var positiveColumn = column
//   if (row - 1 === -1 ){
//     negativeRow = 1
//   }
//   if (row + 1 === 10) {
//     positiveRow = 8
//   }
//   if (column - 1 === -1) {
//     negativeColumn = 1
//   }
//   if (column + 1 === 10) {
//     positiveColumn = 8
//   }
//   console.log(column)
//   console.log(row)
//   return (board[negativeRow][positiveColumn] === 0 &&
//           board[negativeRow][column] === 0 &&
//           board[positiveRow][positiveColumn] === 0 &&
//           board[row][positiveColumn] === 0 &&
//           board[positiveRow][negativeColumn] === 0 &&
//           board[negativeRow][negativeColumn] === 0 &&
//           board[positiveRow][column] === 0 &&
//           board[row][negativeColumn] === 0
//         )
// }
var position = [] // makes this global to keep information constant/outside of loop

function checkSpace(row, column){
  // check new location against existing array
  // indexOf method to check for existing values
  if(position.indexOf(new location) >=0 // then exisits )

  // find positions around new location
  // positions push row -1 row +1
  position[]

  // for (var k = row-1; k<row+2; k++){
  //   console.log("row position " + k)
  //   for(var l= column-1; l<column+2; l++){
  //     console.log("column position " + l)
  //     if(board[row][column] === board[k][l]){
  //       console.log("false");
  //     }
  //   }
  // }
}
