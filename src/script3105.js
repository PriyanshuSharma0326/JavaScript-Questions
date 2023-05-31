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
    // for(let i = 0; i < arr.length; i++) {
    //     if()
    // }
    return arr;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercise 4: Create a function called checkPalindrome that takes a string as a parameter and returns true if it is a palindrome, and false otherwise.



// Exercise 5: Implement a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.




// Advanced Level

// Exercise 1: Write a function named findMax that takes an array of numbers as a parameter and returns the maximum number in the array.



// Exercise 2: Create a function called removeDuplicates that takes an array of elements as a parameter and returns a new array with duplicates removed.



// Exercise 3: Implement a function called isPrime that takes a number as a parameter and returns true if it is prime, and false otherwise.



// Exercise 4: Write a function named capitalizeWords that takes a string as a parameter and returns a new string with the first letter of each word capitalized.



// Exercise 5: Create a function called sumAllNumbers that takes an array of numbers as a parameter and returns the sum of all numbers.




// Expert Level

// Exercise 1: Implement a function called sortByLength that takes an array of strings as a parameter and returns a new array with the strings sorted by their lengths in ascending order.



// Exercise 2: Write a function named findDuplicates that takes an array of elements as a parameter and returns a new array with only the duplicate elements.



// Exercise 3: Create a function called generateFibonacci that takes a number as a parameter and returns an array with the Fibonacci sequence up to that number.



// Exercise 4: Implement a function called countVowels that takes a string as a parameter and returns the number of vowels in the string.



// Exercise 5: Write a function named flattenArray that takes a nested array as a parameter and returns a new array with all the elements flattened into a single level.


