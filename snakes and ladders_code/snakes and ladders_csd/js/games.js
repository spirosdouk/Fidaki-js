var cells;

function setPositions() {
  var positions = [];
  var snakePositions = [13, 38, 46, 73, 82, 89];
  var snakeNewPositions = [12, 18, 36, 43, 62, 79];

  var ladderPositions = [6, 31, 47, 56, 78];
  var ladderNewPositions = [27, 71, 58, 67, 88];

  var snakes_or_ladders_Positions = [25, 29, 65, 70];
  var snakes_or_ladders_NewPositions = [
    "4 or 45",
    "9 or 49",
    "54 or 84",
    "40 or 90",
  ];
  positions[0] = new Object();
  positions[0].from = 0;
  for (var i = 1; i <= 90; i++) {
    positions[i] = new Object();
    positions[i].from = i;

    positions[i].playercount = 0;
    if (snakePositions.indexOf(i) != -1) {
      positions[i].to = snakeNewPositions[snakePositions.indexOf(i)];
      positions[i].type = "Snake";
    } else if (ladderPositions.indexOf(i) != -1) {
      positions[i].to = ladderNewPositions[ladderPositions.indexOf(i)];
      positions[i].type = "Ladders";
    } else if (snakes_or_ladders_Positions.indexOf(i) != -1) {
      positions[i].to =
        snakes_or_ladders_NewPositions[snakes_or_ladders_Positions.indexOf(i)];
      positions[i].type = "Snake or Ladders";
    } else if (i === 11 || i === 55 || i === 88) {
      positions[i].to = i;
      positions[i].type = "September";
    } else if (i === 22 || i === 44 || i === 77) {
      positions[i].to = i;
      positions[i].type = "Swords";
    } else {
      positions[i].to = i;
      positions[i].type = "Normal";
    }
  }
  for (var i = 1; i <= 90; i++) {
    console.log("Cell: " + i + positions[i].type);
  }
  return positions;
}

cells = setPositions();
for (var i = 1; i <= 90; i++) {
  console.log(
    "Cell: " +
      i +
      " type: " +
      cells[i].type +
      " From: " +
      cells[i].from +
      " To: " +
      cells[i].to
  );
}
