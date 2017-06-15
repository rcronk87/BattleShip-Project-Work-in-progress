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
      if(torpedos === 25){
        console.log("You lose!!");
        $(".shipLocation").css("border-color", "red");
      }
    }
      $("#torpedos").text("Torpedos used: " + torpedos++);
      $(this).off("click");
  });
});

// This is the model
// fucntion to makle the table 10 x 10
var torpedos = 1;
var hits;
var board = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];
const ship = 1;
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
var index;
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
function callShip() {
  for (var i=0; i<5; i++){
    // Do-while loop for the random numbers while board position is equal to 1
    var column = Math.floor(Math.random() * 10);
    var row = Math.floor(Math.random() * 10);
    // TODO handle possible duplicates
    board[row][column] = ship;
    var pop = "." + row + column;
    $(pop).addClass('shipLocation');
    console.log(pop);
  }
  // console.log(board);
}

// function newCallShip() {
//   var randomShip = Math.floor(Math.random() * 100);
//   var shipSpot = "space" + randomShip
//   console.log(newCallShip)
// }
