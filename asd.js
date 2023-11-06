function findHighestNumberFromString(numbersString) {
  // Split the string into an array using " or " as the separator
  const numbersArray = numbersString.split(" or ");

  // Convert the string numbers to actual numbers
  const number1 = parseInt(numbersArray[0]);
  const number2 = parseInt(numbersArray[1]);

  // Use Math.max to find the highest number
  const highestNumber = Math.max(number1, number2);

  return highestNumber;
}

const positionString = "4 or 45";
const highestPosition = findHighestNumberFromString(positionString);

console.log("The highest position is: " + highestPosition);
