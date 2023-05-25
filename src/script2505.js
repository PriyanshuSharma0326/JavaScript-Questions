// Exercise 1: Write a program that prompts the user to enter their age. If the age is less than 18, display "You are a minor." Otherwise, display "You are an adult."

// const age = prompt('Enter your age');
const age = 21;
console.log(age < 18 ? 'You are a minor.' : 'You are an adult.');


// Exercise 2: Write a program that checks whether a given number is positive, negative, or zero. Display an appropriate message based on the input.

// const number = prompt('Enter a number');
const number = 12;

console.log(number > 0 ? 'Positive' : (number < 0 ? 'Negative' : 'Zero'));


// Exercise 3: Write a program that prompts the user to enter a number. If the number is divisible by 3, display "Fizz." If it is divisible by 5, display "Buzz." If it is divisible by both 3 and 5, display "FizzBuzz." Otherwise, display the number itself.

// const fizzBuzz = prompt('Enter a number');
const fizzBuzz = 15;

function fizzBuzzGenerator(fb) {
    // for (let i = 0; i<100; i++) {
        if(fb%3 === 0 && fb%5 === 0) {
            return 'FizzBuzz';
        }
        else if(fb%3 === 0) {
            return 'Fizz';
        }
        else if(fb%5 === 0) {
            return 'Buzz';
        }
        else {
            return fb;
        }
    // }
}

console.log(fizzBuzzGenerator(fizzBuzz));


// Exercise 4: Write a program that takes three numbers as input and determines the largest among them. Display the result.

// const x = prompt('Enter a number');
// const y = prompt('Enter a number');
// const z = prompt('Enter a number');
const x = 15;
const y = 27;
const z = 45;

console.log(x>y ? (x>z ? 'x is max' : 'z is max'): (y>z ? 'y is max' : 'z is max'));


// Exercise 5: Write a program that prompts the user to enter a month (1-12) and displays the corresponding season based on the input. For example, if the user enters 3, the program should display "Spring."

// const month = prompt("Enter a month(1-12)");
const month = 11;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
}


// Exercise 6: Write a program that generates and prints all prime numbers between 1 and 100.

function checkIfPrime(num) {
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

function generatePrimeNumbers() {
    let primes = [];
    for(let i = 1; i <= 100; i++) {
        if(checkIfPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(generatePrimeNumbers());


// Exercise 7: Write a program that prompts the user to enter a positive integer and calculates its factorial.

// const num = prompt('Enter a positive number');
const num = 5;

function factorial(num) {
    if(num === 0) {
        return 1;
    }
    else {
        return num*factorial(num-1);
    }
}

console.log(factorial(num));


// Exercise 8: Write a program that prints the Fibonacci sequence up to a specified number of terms entered by the user.

// const fibonacciLimit = prompt('Enter a number');
const fibonacciLimit = 10;

function fibonacci(k) {
    let fibonacciSeries = '';
    let val1 = 0;
    let val2 = 1;
    let sum_last_two;
    for(let i = 0; i < k; i++) {
        fibonacciSeries += val1;
        sum_last_two = val1 + val2;
        val1 = val2;
        val2 = sum_last_two;
        if(i === k-1) {
            fibonacciSeries += '';
        }
        else {
            fibonacciSeries += ', ';
        }
    }
    return fibonacciSeries;
}

console.log(fibonacci(fibonacciLimit));


// Exercise 9: Write a program that prompts the user to enter a string. Count and display the number of vowels (a, e, i, o, u) present in the string.

// const string = prompt('Enter a string');
const string = 'Good Morning';

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
    return `Vowels : ${vowels}`;
}

console.log(countVowels(string));
