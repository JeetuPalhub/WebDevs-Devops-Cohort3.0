const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// .filter() is an array method that creates a new array with only elements that pass a condition.