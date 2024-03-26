function countAandB(input) {
  // your code here
  return input.filter((s) => s === "a" || s === "b").length;
}
function toNumber(input) {
  // your code here
  return input.map((s) => s.charCodeAt(0) - 97 + 1);
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
