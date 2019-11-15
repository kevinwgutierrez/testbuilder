// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var nums = cardNumber.split("");
  var prefix = parseInt(nums[0]);

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (
    cardNumber.length === 14 &&
    (cardNumber.startsWith("38") || cardNumber.startsWith("39") === true)
  ) {
    return "Diner's Club";
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (
    cardNumber.length === 15 &&
    (cardNumber.startsWith("34") || cardNumber.startsWith("37") === true)
  ) {
    return "American Express";
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Visa;
  if (
    (cardNumber.length === 13 || 16 || 19) &&
    cardNumber.startsWith("4") === true
  ) {
    return "Visa";
  }
  // Mastercard
  if (
    cardNumber.length === 16 &&
    (cardNumber.startsWith("51") ||
      cardNumber.startsWith("52") ||
      cardNumber.startsWith("53") ||
      cardNumber.startsWith("54") ||
      cardNumber.startsWith("55") === true)
  ) {
    return "MasterCard";
  }

  // Discover
  if (
    (cardNumber.length === 16 || cardNumber.length === 19) &&
    (cardNumber.startsWith("6011") ||
      cardNumber.startsWith("644") ||
      cardNumber.startsWith("645") ||
      cardNumber.startsWith("646") ||
      cardNumber.startsWith("647") ||
      cardNumber.startsWith("648") ||
      cardNumber.startsWith("649") ||
      cardNumber.startsWith("65") === true)
  ) {
    return "Discover";
  }
  // Maestro
  if (
    cardNumber.length >= 12 &&
    cardNumber.length <= 19 &&
    (cardNumber.startsWith("5018") ||
      cardNumber.startsWith("5020") ||
      cardNumber.startsWith("5038") ||
      cardNumber.startsWith("6304") === true)
  ) {
    return "Maestro";
  }

  // // China UnionPay
  var firstCUPPrefix = cardNumber.substring(0, 6);
  var secondCUPPrefix = cardNumber.substring(0, 3);
  var thirdCUPPrefix = cardNumber.substring(0, 4);
  if (
    cardNumber.length >= 16 &&
    cardNumber.length <= 19 &&
    (cardNumber.startsWith(firstCUPPrefix) ||
      cardNumber.startsWith(secondCUPPrefix) ||
      cardNumber.startsWith(thirdCUPPrefix) === true)
  ) {
    return "China UnionPay";
  }

  // Switch
  if (
    (cardNumber.length === 16 ||
      cardNumber.legnth === 18 ||
      cardNumber.length === 19) &&
    (cardNumber.startsWith("4903") ||
      cardNumber.startsWith("4905") ||
      cardNumber.startsWith("4911") ||
      cardNumber.startsWith("4936") ||
      cardNumber.startsWith("564182") ||
      cardNumber.startsWith("633110") ||
      cardNumber.startsWith("6333") ||
      cardNumber.startsWith("6759") === true)
  ) {
    return "Switch";
  }
};
