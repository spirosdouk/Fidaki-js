function First_dice(newPosition, currentPositionnn) {
  if (getPlayerTurn() == 1) {
    document.getElementById("position" + cells[newPosition].to).innerHTML =
      "<img  src='imagesRed/" +
      cells[newPosition].to +
      ".png'  height=70 width=80></div>";

    if (cells[cells[newPosition].from].type == "Ladders") {
      cells[cells[newPosition].to].playercount++;
    } else {
      cells[cells[newPosition].from].playercount++;
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
  } else if (currentPosition2 == 0 && getPlayerTurn() == 2) {
    if (cells[cells[newPosition].to].playercount == 1) {
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesBoth/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    } else {
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesWhite/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    }

    if (cells[newPosition].type == "Ladders") {
      cells[cells[newPosition].to].playercount++;
    } else {
      cells[newPosition].playercount++;
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
}
function Stay_in_Position_if_snake_p2(newPosition, currentPositionnn) {
  if (
    cells[cells[newPosition].from].playercount == 0 &&
    cells[cells[currentPositionnn].from].playercount == 1
  ) {
    //white player only
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='images/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].from).innerHTML =
      "<img  src='imagesWhite/" +
      cells[newPosition].from +
      ".png'  height=70 width=80></div>";
  } else if (
    cells[newPosition].playercount == 1 &&
    cells[currentPositionnn].playercount == 1
  ) {
    //if pawn already exists where i wanna go
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='images/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].from).innerHTML =
      "<img  src='imagesBoth/" +
      cells[newPosition].from +
      ".png'  height=70 width=80></div>";
  } else if (
    cells[cells[currentPositionnn].from].playercount == 2 &&
    cells[cells[newPosition].from].playercount == 0
  ) {
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='imagesRed/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].from).innerHTML =
      "<img  src='imagesWhite/" +
      cells[newPosition].from +
      ".png'  height=70 width=80></div>";
  }
  console.log(
    "Cell: " +
      newPosition +
      " type: " +
      cells[newPosition].type +
      " From: " +
      cells[currentPositionnn].from +
      " To: " +
      cells[newPosition].from
  );
}
function Stay_in_Position_if_snake_p1(newPosition, currentPositionnn) {
  if (
    cells[newPosition].playercount == 0 &&
    cells[currentPositionnn].playercount == 1
  ) {
    //red player only
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='images/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].from).innerHTML =
      "<img  src='imagesRed/" +
      cells[newPosition].from +
      ".png'  height=70 width=80></div>";
  } else if (cells[newPosition].playercount == 1) {
    //if pawn already exists where i wanna go
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='images/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].from).innerHTML =
      "<img  src='imagesBoth/" +
      cells[newPosition].from +
      ".png'  height=70 width=80></div>";
  } else if (cells[currentPositionnn].playercount == 2) {
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='imagesWhite/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].from).innerHTML =
      "<img  src='imagesRed/" +
      cells[newPosition].from +
      ".png'  height=70 width=80></div>";
  }
  console.log(
    "Cell: " +
      newPosition +
      " type: " +
      cells[newPosition].type +
      " From: " +
      cells[currentPositionnn].from +
      " To: " +
      cells[newPosition].from
  );
}

function Regular_Movement(newPosition, currentPositionnn) {
  if (
    cells[cells[newPosition].to].playercount == 0 &&
    cells[currentPositionnn].playercount == 1
  ) {
    if (getPlayerTurn() == 1) {
      document.getElementById(
        "position" + cells[currentPositionnn].from
      ).innerHTML =
        "<img  src='images/" +
        cells[currentPositionnn].from +
        ".png'  height=70 width=80></div>";
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesRed/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    } else {
      document.getElementById(
        "position" + cells[currentPositionnn].from
      ).innerHTML =
        "<img  src='images/" +
        cells[currentPositionnn].from +
        ".png'  height=70 width=80></div>";
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesWhite/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    }
  } else if (cells[cells[newPosition].to].playercount == 1) {
    //if pawn already exists where i wanna go
    document.getElementById(
      "position" + cells[currentPositionnn].from
    ).innerHTML =
      "<img  src='images/" +
      cells[currentPositionnn].from +
      ".png'  height=70 width=80></div>";
    document.getElementById("position" + cells[newPosition].to).innerHTML =
      "<img  src='imagesBoth/" +
      cells[newPosition].to +
      ".png'  height=70 width=80></div>";
  } else if (cells[currentPositionnn].playercount == 2) {
    if (getPlayerTurn() == 1) {
      document.getElementById(
        "position" + cells[currentPositionnn].from
      ).innerHTML =
        "<img  src='imagesWhite/" +
        cells[currentPositionnn].from +
        ".png'  height=70 width=80></div>";
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesRed/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    } else {
      document.getElementById(
        "position" + cells[currentPositionnn].from
      ).innerHTML =
        "<img  src='imagesRed/" +
        cells[currentPositionnn].from +
        ".png'  height=70 width=80></div>";
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesWhite/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    }
  } else {
    if (getPlayerTurn() == 1) {
      document.getElementById(
        "position" + cells[currentPositionnn].from
      ).innerHTML =
        "<img  src='images/" +
        cells[currentPositionnn].from +
        ".png'  height=70 width=80></div>";
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesRed/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    } else {
      document.getElementById(
        "position" + cells[currentPositionnn].from
      ).innerHTML =
        "<img  src='images/" +
        cells[currentPositionnn].from +
        ".png'  height=70 width=80></div>";
      document.getElementById("position" + cells[newPosition].to).innerHTML =
        "<img  src='imagesWhite/" +
        cells[newPosition].to +
        ".png'  height=70 width=80></div>";
    }
  }
}
