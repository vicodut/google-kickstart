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

function solve() {
  let [M, N, P] = readline().split(' ').map(x => parseInt(x));
  P--;
  let scoreboard = [];

  for (let i = 0; i < M; i++) {
    scoreboard.push(readline().split(' '));
  }

  let jBase = scoreboard[P][0];
  let res = Math.max(...scoreboard.filter((e, i) => i != P).flatMap((e) => +e[0]));
  let steps = res - jBase > 0 ? res - jBase : 0;
  for (let i = 1; i < N; i++) {

    jBase = scoreboard[P][i];
    res = Math.max(...scoreboard.filter((e, i) => i != P).flatMap((e) => +e[i]));
    
    steps += res - jBase > 0 ? res - jBase : 0;
  }

  console.log(steps);
}

main();