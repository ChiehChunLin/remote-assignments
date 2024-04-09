function count(input) {
  // your code here
  const result = {};
  input.forEach((item) => {
    if (result[item] === undefined) {
      result[item] = 1;
    } else {
      result[item]++;
    }
  });
  return result;
}

//------- solved by array  ------------
function count2(input) {
  const result = [];
  helper(input);
  return `{${result.join(", ")}}`;

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      const letter = arr[i];
      const count = arr.reduce((count, val) => count + (letter == val), 0);
      result.push(`${letter}:${count}`);
      const newArr = arr.filter((val) => val !== letter);
      console.log(newArr, newArr.length);
      if (newArr.length === 0) break;
      helper(newArr);
      break;
    }
  }
}
function count3(input) {
  const result = [];
  function helper(arr) {
    if (arr.length === 0) return;

    const letter = arr[0];
    const count = arr.filter((val) => val === letter).length;
    result.push(`${letter}:${count}`);
    const newArr = arr.filter((val) => val !== letter);
    helper(newArr);
  }
  helper(input);
  return `{${result.join(", ")}}`;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}
console.log(count2(input1)); // should print {a:3, b:1, c:2, x:1}
console.log(count3(input1)); // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  //your code here
  let result = {};
  input.forEach((obj) => {
    if (result[obj.key] === undefined) {
      result[obj.key] = obj.value;
    } else {
      result[obj.key] += obj.value;
    }
  });
  return result;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
