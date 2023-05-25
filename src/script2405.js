// Exercise 1: Write a program that calculates the sum of two numbers and displays the result.

function sum(num1, num2) {
    return num1+num2;
}

console.log('1. Sum of Two numbers = ', sum(23, 44));


// Exercise 2: Write a program that calculates the area of a rectangle. Prompt the user to enter the length and width of the rectangle and display the result.

// let length = prompt('Enter length');
// let width = prompt('Enter width');
let length = 20;
let width = 40;

console.log('2. Area of rectangle = ', length*width);


// Exercise 3: Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.

// let Temp = Number(prompt('Enter temperature(in Celsius)'));
let Temp = 20;

console.log('3. Temperature(in Fahrenheit) : ', Number(((Temp)*(9/5) + 32).toFixed(5)));


// Exercise 4: Write a program that checks if a given number is even or odd. Prompt the user to enter a number and display whether it is even or odd.

// const a_number = prompt("Enter a number");
const a_number = 43;
if(a_number %2 == 0) {
    console.log("4. Even");
} else {
    console.log("4. Odd");
}


// Exercise 5: Write a program that concatenates two strings and displays the result. Prompt the user to enter two strings and display the concatenated string.

function appendStrings(str1, str2) {
    return str1.concat(str2);
}

console.log('5. New string =', appendStrings('Hello', ' there!'));


// Exercise 6: Write a program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average.

// const n1 = prompt("Enter first number");
// const n2 = prompt("Enter second number");
// const n3 = prompt("Enter third number");
const n1 = 20;
const n2 = 30;
const n3 = 55;

function returnAvg(n1, n2, n3) {
    return Number(((n1+n2+n3)/3).toFixed(2));
}

console.log('6. Average of three numbers = ', returnAvg(n1, n2, n3));


// Exercise 7: Write a program that checks if a given year is a leap year. Prompt the user to enter a year and display whether it is a leap year or not.

function isLeapYear(year) {
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    }
    else {
        return `${year} is not a leap year.`;
    }
}

console.log('7. Is Leap year?', isLeapYear(2016));


// Exercise 8: Write a program that swaps the values of two variables. Prompt the user to enter two values, swap them, and display the new values.

// const n1 = prompt("Enter first number");
// const n2 = prompt("Enter second number");
let val1 = 20;
let val2 = 30;

function swap(n1, n2) {
    console.log(`8.\nValues before swapping : \nval1 = ${n1}, val2 = ${n2}`);
    [n2, n1] = [n1, n2];
    console.log(`8.\nValues after swapping : \nval1 = ${n1}, val2 = ${n2}`);
}

swap(val1, val2);


// Exercise 9: Write a program that calculates the area and circumference of a circle. Prompt the user to enter the radius of the circle and display the area and circumference.

// const radius = prompt("Enter radius of circle");
let radius = 12;

function calculate(radius) {
    [area, circumference] = [(22/7)*(radius*radius), 2*(22/7)*radius];
    return `9. Area is ${(area).toFixed(2)} and Circumference is ${circumference.toFixed(2)}`;
}

console.log(calculate(radius));


// Exercise 10: Write a program that checks if a given string is a palindrome. Prompt the user to enter a string and display whether it is a palindrome or not.

function ifPalindrome(string) {
    let word = string.split('');
    let reversedWord = string.split('').reverse();
    let flag = false;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === reversedWord[i]) {
            flag =true;
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
}

console.log('11/ Check if palindrome : ', ifPalindrome('malayalam'));
