// Write a function that takes an array of objects as input, and filters the arrray to only include objects that have a specific property. Implement this using the filter method.

function filterByMark(array, marks) {
    return array.filter(obj => obj.hasOwnMark(marks));
  }
  
  // Example usage:
  const arrayOfObjects = [
    { name: 'Alice', age: 25 , marks: 90/100 },
    { name: 'Bob', occupation: 'Engineer' , marks: 100/100 },
    { name: 'Charlie', age: 30, occupation: 'Teacher' },
    { age: 35, occupation: 'Doctor' }
  ];
  
  const filteredArray = filterByMark(arrayOfObjects, 'marks');
  console.log(filteredArray);
  
  