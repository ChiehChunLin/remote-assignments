//---------------------------------
//--------- callback --------------
//---------------------------------
function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

//---------------------------------
//--------- promise --------------
//---------------------------------
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

//---------------------------------
//--------- async/await -----------
//---------------------------------
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  console.log(await delayedResultPromise(4, 5, 3000));
}
main(); // result will be shown in the console after <delayTime> seconds
