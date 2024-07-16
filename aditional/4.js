// Write a function that determines whether some or all objects in an array meet a certain condition using some and every method

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
   

//------------every-------------


function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough); 
  [12, 54, 18, 130, 44].every(isBigEnough);