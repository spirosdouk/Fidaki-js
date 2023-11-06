function updateInfobox(player, diceResult, hasSeptemberEffect) {
  const menuItem1 = document.getElementById("menuItem1");
  const menuItem2 = document.getElementById("menuItem2");
  const menuItem3 = document.getElementById("menuItem3");
  console.log("Dice: " + diceResult + " Same player turn :" + getPlayerTurn());
  if (diceResult === 6) {
    console.log("THE SAME PLAYER PLAYS ");
    menuItem1.textContent = "Player: " + playerTurn;
    menuItem2.textContent = "Dice: " + diceResult;
    menuItem3.textContent = "Pass: " + hasSeptemberEffect;
    menuItem4.textContent = "Next_Player: " + playerTurn;
  } else {
    menuItem1.textContent = "Player: " + playerTurn;
    menuItem2.textContent = "Dice: " + diceResult;
    menuItem3.textContent = "Pass: " + hasSeptemberEffect;
    changePlayerTurn();
    menuItem4.textContent = "Next_Player: " + playerTurn;
  }
}

function getPlayerTurn() {
  return playerTurn;
}

function changePlayerTurn() {
  if (playerTurn === 1) {
    playerTurn++;
  } else {
    playerTurn--;
  }
}
function hasPlayerWon(newPosition) {
  if (newPosition == 90) {
    return getPlayerTurn();
  }
  return 0;
}
