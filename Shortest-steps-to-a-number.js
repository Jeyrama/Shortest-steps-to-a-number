/*
Given a number, num, 
return the shortest amount of steps it would take from 1, 
to land exactly on that number.

Description:
  A step is defined as either:
    Adding 1 to the number: num += 1
    Doubling the number: num *= 2

You will always start from the number 1 and you will have to return 
the shortest count of steps it would take to land exactly on that number.

1 <= num <= 10000

Examples:
  num == 3 would return 2 steps:
    1 -- +1 --> 2:        1 step
    2 -- +1 --> 3:        2 steps
    2 steps

  num == 12 would return 4 steps:
    1 -- +1 --> 2:        1 step
    2 -- +1 --> 3:        2 steps
    3 -- x2 --> 6:        3 steps
    6 -- x2 --> 12:       4 steps
    4 steps

  num == 16 would return 4 steps:
    1 -- +1 --> 2:        1 step
    2 -- x2 --> 4:        2 steps
    4 -- x2 --> 8:        3 steps
    8 -- x2 --> 16:       4 steps
    4 steps
*/


// Solution

function shortestStepsToNum(num) {
  let counter = 0;
  while (num>1) {
    num = num % 2 ? num - 1 : num / 2;
    counter++
  }
  return counter;
}

// or

function shortestStepsToNum(num) {
  let steps = 0;
  let n = num;
  while (n > 1) {
    if (n % 2 !== 0) {
        n = n - 1;
        steps++;
    } else {
      n = n / 2;
      steps++;
     }
  }
  return steps
}

// or

function shortestStepsToNum(num) {
  if (num < 3)
    return num - 1;
  let next = num % 2 ? num - 1 : num / 2;
  
  return 1 + shortestStepsToNum(next);
}