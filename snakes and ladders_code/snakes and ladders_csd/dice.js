var currentPosition = 0; // Start from the first position
var next = 2;

// Function to move the pawn based on the rolled number
function movePawn() {
  var rolledNumber = rollDice();
  var newPosition = currentPosition + rolledNumber;

  // Check if the newPosition exceeds the board's limit
  if (newPosition <= 90) {
    // Change the position
    updateInfobox(1, rolledNumber, true);
    currentPosition = UpdateImgs(currentPosition, newPosition);
  } else {
    alert("You can't move beyond the board's limit.");
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function UpdateImgs(currentPosition, newPosition) {
  document.getElementById("position" + cells[currentPosition].from).innerHTML =
    "<img  src='images/" +
    cells[currentPosition].from +
    ".png'  height=70 width=80></div>";
  document.getElementById("position" + cells[newPosition].to).innerHTML =
    "<img  src='imagesRed/" +
    cells[newPosition].to +
    ".png'  height=70 width=80></div>";
  console.log(
    "Cell: " +
      newPosition +
      " type: " +
      cells[newPosition].type +
      " From: " +
      cells[currentPosition].from +
      " To: " +
      cells[newPosition].to
  );
  return cells[newPosition].to;
}

function updateInfobox(player, diceResult, hasSeptemberEffect) {
  const menuItem1 = document.getElementById("menuItem1");
  const menuItem2 = document.getElementById("menuItem2");
  const menuItem3 = document.getElementById("menuItem3");

  menuItem1.textContent = "Player: " + player;
  menuItem2.textContent = "Dice: " + diceResult;
  menuItem3.textContent = "Pass: " + hasSeptemberEffect;
  if (next === 1) {
    menuItem4.textContent = "Next_Player: " + next;
    next++;
  } else {
    menuItem4.textContent = "Next_Player: " + next;
    next--;
  }
}
