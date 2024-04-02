// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
  "Please enter some Froyo Flavors separated by commas.",
  "vanilla,strawberry,coffee"
);

// Split the string of strings into an array of strings.
const stringArray = userInputString.split(",");

console.log("You input: " + stringArray);

function froyoOrders(stringArray) {
  //Create Object for List
  const froyoObj = {};
  //Use a loop to determine the number of times each flavor appears in the array
  for (let i = 0; i < stringArray.length; i++) {
    let currentFlavor = stringArray[i];
    if (currentFlavor in froyoObj) {
      froyoObj[currentFlavor] += 1;
    } else {
      froyoObj[currentFlavor] = 1;
    }
  }
  return froyoObj;
  // Display the Froyo Flavor Object
}
console.table(froyoOrders(stringArray));
