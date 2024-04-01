// in sorted numbers array
function binarySearchPosition(numbers, target) {
  // your code here
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] > target) {
      right = mid - 1;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
