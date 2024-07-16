// If you wanted to find the position of an object in an array based on a specific property, how would you do it using findIndex method?

const myArr = [5, 8, 7, 9]
const find =  myArr.findIndex(function(element){
    return element >5;
});
console.log(find);