// Beginner Level

// Exercise 1: Write a function called greet that takes a name as a parameter and prints a greeting message, like "Hello, [name]!".

const greet = (name) => {
    return `Hello ${name}`;
}
console.log(greet('Cheeku'));

// Exercise 2: Create a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area.

const calculateArea = (len, wid) => {
    return len*wid;
}
console.log(calculateArea(4, 20));

// Exercise 3: Write a function named isEven that takes a number as a parameter and returns true if it is even, and false otherwise.

const isEven = (number) => {
    return number%2 === 0;
}
console.log(isEven(9));

// Exercise 4: Implement a function called concatenateArrays that takes two arrays as parameters and returns a new array containing the elements of both arrays.

const concatenateArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(concatenateArrays([1, 4, 8], [2, 7, 4]));

// Exercise 5: Write a function called printNumbers that takes a number as a parameter and prints all numbers from 1 to that number.

const printNumbers = (number) => {
    let str = '';
    for(let i = 1; i <= number; i++) {
        str += (i + '\n');
    }
    return str;
}
console.log(printNumbers(10));


// Intermediate Level

// Exercise 1: Create a function called reverseString that takes a string as a parameter and returns the reverse of the string.

const reverseString = (string) => {
    return string.split('').reverse().join('');
}
console.log(reverseString('Bhojpuri'));

// Exercise 2: Implement a function called calculateFactorial that takes a number as a parameter and returns its factorial.

const calculateFactorial = (number) => {
    if(number === 1) {
        return 1;
    }
    else {
        return calculateFactorial(number - 1)*number;
    }
}
console.log(calculateFactorial(5));

// Exercise 3: Write a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array containing only the even numbers.

const filterEvenNumbers = (arr) => {
    return arr.filter((e) => e%2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercise 4: Create a function called checkPalindrome that takes a string as a parameter and returns true if it is a palindrome, and false otherwise.

const checkPalindrome = (string) => {
    let letters = string.split('');
    let reverseStringLetters = letters.reverse();
    let flag = false;
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] === reverseStringLetters[i]) {
            flag = true;
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(checkPalindrome('malayalam'));

// Exercise 5: Implement a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

const calculateAverage = (arr) => {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum/arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));


// Advanced Level

// Exercise 1: Write a function named findMax that takes an array of numbers as a parameter and returns the maximum number in the array.

const findMax = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return Number(max);
}
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercise 2: Create a function called removeDuplicates that takes an array of elements as a parameter and returns a new array with duplicates removed.

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 5, 6, 6, 7, 9, 10, 11, 11, 13]));

// Exercise 3: Implement a function called isPrime that takes a number as a parameter and returns true if it is prime, and false otherwise.

function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    else if (num%2 === 0){
        return false;
    }
    for(let i = 3; i <= Math.sqrt(num); i+=2) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}
// const primeNumber = prompt('Enter a number');
const primeNumber = 13;
console.log(isPrime(primeNumber));


// Exercise 4: Write a function named capitalizeWords that takes a string as a parameter and returns a new string with the first letter of each word capitalized.

const sentence = 'this is a sample sentence';

function capitalize(sentence) {
    let words = sentence.split(' ');
    
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
    
    return words.join(' ');
}

console.log(capitalize(sentence));


// Exercise 5: Create a function called sumAllNumbers that takes an array of numbers as a parameter and returns the sum of all numbers.

function sumAllNumbers(arr) {
    let sum = arr.reduce((prev, curr) => prev+curr, 0);
    
    return sum;
}

console.log(sumAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// Expert Level

// Exercise 1: Implement a function called sortByLength that takes an array of strings as a parameter and returns a new array with the strings sorted by their lengths in ascending order.

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(['hello', 'united', 'hypnosis', 'free', 'try']));


// Exercise 2: Write a function named findDuplicates that takes an array of elements as a parameter and returns a new array with only the duplicate elements.

function findDuplicates(arr) {
    let uniqueElements = new Set();
    let duplicates = [];

    for (let element of arr) {
        if(uniqueElements.has(element)) {
            duplicates.push(element);
        }
        else {
            uniqueElements.add(element);
        }
    }
    return duplicates;
}

console.log(findDuplicates([1, 2, 2, 5, 6, 6, 7, 9, 10, 11, 11, 13]));


// Exercise 3: Create a function called generateFibonacci that takes a number as a parameter and returns an array with the Fibonacci sequence up to that number.

let fibonacciSeries = '';
function generateFibonacci(k) {
    let val1 = 0;
    let val2 = 1;
    let sum_last_two;
    for(let i = 0; val1 < k; i++) {
        fibonacciSeries += val1;
        sum_last_two = val1 + val2;
        val1 = val2;
        val2 = sum_last_two;
        if(val1 > k) {
            fibonacciSeries += '';
        }
        else {
            fibonacciSeries += ', ';
        }
    }
}
generateFibonacci(30);
console.log(fibonacciSeries);


// Exercise 4: Implement a function called countVowels that takes a string as a parameter and returns the number of vowels in the string.

function countVowels(string) {
    let vowels = 0;
    let letters = string.split('');
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] === 'a' || 
        letters[i] === 'e' || 
        letters[i] === 'i' || 
        letters[i] === 'o' || 
        letters[i] === 'u' || 
        letters[i] === 'A' || 
        letters[i] === 'E' || 
        letters[i] === 'I' || 
        letters[i] === 'O' || 
        letters[i] === 'U') {
            vowels++;
        }
    }
    console.log(`\nVowels : ${vowels}`);
}

countVowels('hello world');


// Exercise 5: Write a function named flattenArray that takes a nested array as a parameter and returns a new array with all the elements flattened into a single level.

function flattenArray(multiArray) {
    let flattenedArray = [];
    for(let i = 0; i < multiArray.length; i++) {
        for(let j = 0; j < multiArray[i].length; j++) {
            flattenedArray.push(multiArray[i][j]);
        }
    }
    return flattenedArray;
}

let flatArray = flattenArray(
    [
        [10, 11],
        [20, 21],
        [30, 31]
    ]
);

console.log(flatArray);
