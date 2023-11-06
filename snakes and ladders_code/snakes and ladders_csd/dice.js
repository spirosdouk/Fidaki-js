var currentPosition = 0;
var currentPosition2 = 0;
var playerTurn = 1;
var hasSeptemberEffect = false;
var hasSeptemberEffect2 = false;
var snake_or_ladder = 0;
var check = 0;
var check2 = 0;
// Function to move the pawn based on the rolled number
function movePawn() {
  if (check == 0 && check2 == 0) {
    var rolledNumber = rollDice();
    var newPosition;
    if (getPlayerTurn() == 1) {
      newPosition = currentPosition + rolledNumber;
    } else {
      newPosition = currentPosition2 + rolledNumber;
    }
    // Check if the newPosition exceeds the board's limit
    if (newPosition > 90) {
      newPosition = 90 + (90 - newPosition);
    }
    // Change the position
    if (cells[newPosition].type == "September") {
      if (getPlayerTurn() == 1) {
        hasSeptemberEffect = true;
      } else {
        hasSeptemberEffect2 = true;
      }
    }

    if (getPlayerTurn() == 1) {
      currentPosition = UpdateImgs(currentPosition, newPosition);
    } else {
      currentPosition2 = UpdateImgs(currentPosition2, newPosition);
    }
    check = hasPlayerWon(currentPosition);
    check2 = hasPlayerWon(currentPosition2);

    if (getPlayerTurn() == 1) {
      updateInfobox(1, rolledNumber, hasSeptemberEffect);
    } else {
      updateInfobox(2, rolledNumber, hasSeptemberEffect2);
    }
    if (check != 0) {
      alert("congratz the 1st player won!");
    }
    if (check2 != 0) {
      alert("congratz the 2nd player won!");
    }
  } else {
    alert("The Game Has Ended Well Played!");
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function SeptDice() {
  return Math.floor(Math.floor(Math.random() * 11));
}
function UpdateImgs(currentPositionnn, newPosition) {
  var Pls_eukola_8emata;

  if (currentPosition == 0) {
    var first_pos = First_dice(newPosition, currentPositionnn);
    return first_pos;
  }
  if (currentPosition2 == 0 && getPlayerTurn() == 2) {
    var first_pos = First_dice(newPosition, currentPositionnn);
    return first_pos;
  }
  if (currentPositionnn == newPosition) {
    return newPosition;
  }
  if (cells[newPosition].type == "Snake or Ladders") {
    // change type of snake or ladders
    Pls_eukola_8emata = SeptDice();
    console.log(
      "dino ma8hma gia snake or ladders u wrote : " + Pls_eukola_8emata
    );
    if (Pls_eukola_8emata > 4) {
      cells[newPosition].type = "Ladders";
      console.log("allagh se skala");
    } else {
      console.log("allagh se Snake");
      cells[newPosition].type = "Snake";
    }
    snake_or_ladder = 1;
  }

  if (hasSeptemberEffect == true || hasSeptemberEffect2 == true) {
    Pls_eukola_8emata = SeptDice();
    console.log("dino septembrh Perasa h oxi;;;; :" + Pls_eukola_8emata);
  }

  if (
    cells[newPosition].type == "Snake" &&
    hasSeptemberEffect2 == true &&
    getPlayerTurn() == 2
  ) {
    if (Pls_eukola_8emata > 4) {
      console.log("dino septembrh Perasa!!!! me:" + Pls_eukola_8emata);

      Stay_in_Position_if_snake_p2(newPosition, currentPositionnn);

      if (snake_or_ladder === 1) {
        snake_or_ladder = 0;
        cells[newPosition].type = "Snake or Ladders";
      }
      cells[cells[newPosition].from].playercount++;
      cells[cells[currentPositionnn].from].playercount--;

      return newPosition; //If september and passes stays where he is at on top of snake
    }
  }
  if (
    cells[newPosition].type == "Snake" &&
    hasSeptemberEffect == true &&
    getPlayerTurn() == 1
  ) {
    if (Pls_eukola_8emata > 4) {
      console.log("dino septembrh Perasa!!!! me:" + Pls_eukola_8emata);

      Stay_in_Position_if_snake_p1(newPosition, currentPositionnn);

      if (snake_or_ladder === 1) {
        snake_or_ladder = 0;
        cells[newPosition].type = "Snake or Ladders";
      }

      cells[cells[newPosition].from].playercount++;
      cells[cells[currentPositionnn].from].playercount--;

      return newPosition; //If september and passes stays where he is at on top of snake
    }
  }

  var temp_for_string = cells[newPosition].to;

  if (snake_or_ladder == 1 && cells[newPosition].type == "Snake") {
    snake_or_ladder = 0;
    const lowestPosition = findLowestNumber(cells[newPosition].to);
    cells[newPosition].to = lowestPosition;
    console.log(
      "It is a Snake (u wrote less than 5) unlucky :( new positionis :" +
        cells[newPosition].to
    );

    cells[newPosition].type = "Snake or Ladders";
  }

  if (snake_or_ladder === 1 && cells[newPosition].type == "Ladders") {
    snake_or_ladder = 0;
    const HighestPosition = findHighestNumber(cells[newPosition].to);
    cells[newPosition].to = HighestPosition;
    console.log(
      "It is ladder (u wrote >=5) like u new positionis :" +
        cells[newPosition].to
    );
    cells[newPosition].type = "Snake or Ladders";
  }

  Regular_Movement(newPosition, currentPositionnn);

  if (
    cells[newPosition].type === "Snake" ||
    cells[newPosition].type === "Ladders" ||
    cells[newPosition].type === "Snake or Ladders"
  ) {
    console.log("ladder h fidi o mpro");

    cells[cells[newPosition].to].playercount++;
    cells[currentPositionnn].playercount--;
  } else {
    console.log("o mpro kanonikos");

    cells[newPosition].playercount++;
    cells[currentPositionnn].playercount--;
  }

  if (snake_or_ladder === 1) {
    cells[newPosition].type = "Snake or Ladders";
    snake_or_ladder = 0;
    var newPosition = cells[newPosition].to;
    cells[newPosition].to = temp_for_string;
    return newPosition;
  }

  console.log(
    "Cell: " +
      newPosition +
      " type: " +
      cells[newPosition].type +
      " From: " +
      cells[currentPositionnn].from +
      " To: " +
      cells[newPosition].to
  );

  return cells[newPosition].to;
}
function findLowestNumber(numbersString) {
  const numbersArray = numbersString.split(" or ");

  const number1 = parseInt(numbersArray[0]);
  const number2 = parseInt(numbersArray[1]);

  const lowestNumber = Math.min(number1, number2);

  return lowestNumber;
}

function findHighestNumber(numbersString) {
  const numbersArray = numbersString.split(" or ");

  const number1 = parseInt(numbersArray[0]);
  const number2 = parseInt(numbersArray[1]);

  const highestNumber = Math.max(number1, number2);

  return highestNumber;
}
function getPlayerTurn() {
  return playerTurn;
}
