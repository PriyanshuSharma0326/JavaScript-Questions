// Beginner Level

// Exercise 1: Create an array called colors with three favorite colors of your choice. Print the second color in the array.

const colors = ['neon', 'red', 'lightgreen'];
console.log(colors[1]);

// Exercise 2: Create an array called numbers with five integers. Add the number 10 to the end of the array using the push() method.

const numbers = [1, 2, 3, 4, 5];
numbers.push(10);
console.log(numbers);

// Exercise 3: Remove the last element from the numbers array using the pop() method. Print the modified array.

numbers.pop()
console.log(numbers);

// Exercise 4: Create an array called fruits with four different fruits. Add two more fruits to the beginning of the array using the unshift() method.

const fruits = ['kiwi', 'pineapple', 'sweet mangoes', 'apple'];
fruits.unshift('banana', 'grapes');
console.log(fruits);

// Exercise 5: Given an array pets with the values ["cat", "dog", "bird"], use the splice() method to replace "bird" with "fish". Print the modified array.

const pets = ["cat", "dog", "bird"];
pets.splice(2, 2, 'fish');
console.log(pets);


// Intermediate Level

// Exercise 1: Given an array names with the values ["John", "Jane", "Bob", "Alice"], use the slice() method to create a new array containing only the first two names. Print the new array.

const names = ["John", "Jane", "Bob", "Alice"];
let newNames = names.slice(0, 2);
console.log(newNames);

// Exercise 2: Create an array called numbers with ten random integers. Use a for loop to calculate the sum of all the numbers in the array.

const randomNumbers = [];
let sumOfRandomNumbers = 0;
for(let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random()*50) + 1);
}
for(let i = 0; i < 10; i++) {
    sumOfRandomNumbers += randomNumbers[i];
}
console.log(sumOfRandomNumbers);

// Exercise 3: Given an array fruits with the values ["apple", "banana", "orange"], use the forEach() method to print each fruit in the array.

const newFruits = ["apple", "banana", "orange"];
newFruits.forEach(item => {
    console.log(item);
});

// Exercise 4: Create an array called grades with five random numbers representing grades. Use a for loop to calculate the average grade.

const grades = [];
let sumOfGrades = 0;
for(let i = 0; i < 10; i++) {
    grades.push(Math.floor(Math.random()*100) + 1);
}
for(let i = 0; i < 10; i++) {
    sumOfGrades += grades[i];
}
console.log('Average of grades', sumOfGrades/(grades.length));

// Exercise 5: Given an array numbers with the values [1, 2, 3, 4, 5], use a for loop to double each number in the array. Print the modified array.

const values = [1, 2, 3, 4, 5];
for(let i = 0; i < values.length; i++) {
    values[i] *= 2;
}
console.log(values);


// Advanced Level

// Exercise 1: Create an array called names with five names. Write a function that takes an array as a parameter and returns the length of the longest name in the array.

const fiveNames = ['Pragyan', 'Abhigyan', 'Christopher', 'Yukti', 'Kabir'];
function longestName (names) {
    let longest = 0;
    for(let i = 0; i < names.length; i++) {
        let letters = names[i].split('');
        if(longest < letters.length) {
            longest = letters.length
        }
    }
    return longest;
}
console.log(longestName(fiveNames));

// Exercise 2: Given an array numbers with random integers, write a function that finds and returns the smallest number in the array.

function smallestNumber() {
    let smallest = 101;
    for(let i = 0; i < randomNumbers.length; i++) {
        if(smallest > randomNumbers[i]) {
            smallest = randomNumbers[i];
        }
    }
    return smallest;
}

console.log(smallestNumber());

// Exercise 3: Create an array called words with five different words. Write a function that takes an array as a parameter and returns a new array with the lengths of each word.

const words = ['Bank', 'Hotel', 'Manager', 'Employee', 'Dustbin'];
function returnLengths(words) {
    let outputString = '';
    for(let i = 0; i < words.length; i++) {
        outputString += `${words[i]} (Length) : ${words[i].split('').length}\n`;
    }
    return outputString;
}
console.log(returnLengths(words));

// Exercise 4: Given an array numbers with random integers, write a function that checks if all the numbers in the array are positive.

const numbersArray = [10, 4, 9, 7, -12];
function checkNegative(arr) {
    let check = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            check = true;
            return check;
        }
    }
    return check;
}
console.log(checkNegative(numbersArray));

// Exercise 5: Create a function called reverseArray that takes an array as a parameter and returns a new array with the elements in reverse order.

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));


// Expert Level

// Exercise 1: Create a function called uniqueValues that takes an array as a parameter and returns a new array with only the unique values from the original array.

function uniqueValues(arr) {}
console.log(uniqueValues(1, 2, 2, 3, 5, 10, 20, 5, 4, 10));

// Exercise 2: Given two arrays arr1 and arr2, write a function that combines the elements from both arrays and returns a new array.

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArrays([1, 4, 8], [2, 7, 4]));

// Exercise 3: Create a function called capitalizeNames that takes an array of names as a parameter and returns a new array with the names capitalized.

function capitalizeNames(arr) {
    return arr;
}
console.log(capitalizeNames(['neerav', 'vijay', 'abhijeet', 'mrigmala']));

// Exercise 4: Given an array numbers with random integers, write a function that sorts the array in ascending order.

function sortAscending(arr) {
    return arr.sort((a,b) => a-b);
}
console.log(sortAscending([10, 15, 24, 60, 2, 8, 17, 31, 72, 45]));

// Exercise 5: Create a function called matrixMultiplication that takes two 2D arrays as parameters and returns the result of matrix multiplication.

function matrixMultiplication(arr1, arr2) {}
console.log(matrixMultiplication());
