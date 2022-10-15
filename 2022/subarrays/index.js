'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = -1;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readline() {
  return inputString[currentLine++];
}

// Make a Snippet for the code above this and then write your logic in main();

function main() {
  // Declare and read the number of test cases.
  var T;
  T = parseInt(readline());

  // Loop over the number of test cases.
  for (var test_no = 1; test_no <= T; test_no++) {
    process.stdout.write('Case #' + test_no + ': ');
    solve();
  }
}

const getSubArray = (arr) => {
    let t = [];
    for (let i = 1; i <= arr.length; i++) {
      for (let j = 0; j <= arr.length - i; j++) {
          let sub = arr.slice(j, j + i);
          if (t.filter(e => JSON.stringify(e) == JSON.stringify(sub)).length == 0) {
              t.push(sub);
          }
      }
    }

    return t;
}

const isHappy = (arr) => {
  let t = getSubArray(arr);
  return t.reduce((acc, e) => acc + e[0], 0) >= 0;
}

function solve() {
  let [N] = readline().split(' ').map(x => parseInt(x));
  
  let array = readline().split(' ').map(e => parseInt(e));

  let t = getSubArray(array);

  let happy = t.filter(e => isHappy(e));
  console.log(happy);
  happy = new Set([...happy.map(e => JSON.stringify(e.sort()))])

  // console.log(happy);
  console.log("\n");
}

main();
