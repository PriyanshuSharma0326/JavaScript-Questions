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

