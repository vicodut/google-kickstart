'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = -1;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  console.log('\n\n\n');

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
  let [RS, RH] = readline().split(' ').map(x => parseInt(x));
  
  let N = +readline();
  let reds = [];
  for (let i = 0; i < N; i++) {
    reds.push(readline().split(' ').map(x => parseInt(x)));
  }

  let M = readline();
  let yellows = [];
  for (let i = 0; i < M; i++) {
    yellows.push(readline().split(' ').map(x => parseInt(x)));
  }

  let rS = [];
  for (let red of reds) {
    rS.push(Math.sqrt( (red[0] * red[0]) + (red[1] * red[1]) ));
  }

  let rY = [];
  for (let yellow of yellows) {
    rY.push(Math.sqrt( (yellow[0] * yellow[0]) + (yellow[1] * yellow[1]) ));
  }


  rS = rS.filter(e => e <= RS + RH).sort();
  rY = rY.filter(e => e <= RS + RH).sort();
 
  if (rS.length == 0) console.log(0, rY.length);
  if (rY.length == 0) console.log(rS.length, 0);
  
  if(rS[0] > rY[0]) {
    console.log(0, rY.filter(e => e < rS[0]).length);
  }
  if(rS[0] < rY[0]) {
    console.log(rS.filter(e => e < rY[0]).length, 0);
  }
}

main(); 

