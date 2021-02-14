//1.	Write a  program to print all natural numbers from 1 to 100. - using while loop
/*
let a = 0;
while (a <= 100) {
  console.log(a);
  a++;
}

// 2.	Write a  program to print all natural numbers in reverse (from n to 1). - using while loop

let i = 100;
while (i >= 0) {
  console.log(i);
  i--;
}

// 3.	Write a  program to print all alphabets from a to z. - using while loop

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
while (alphabet < "z") {
  console.log(alphabet);
  alphabet++;
}

// 4.	Write a program to print all even numbers between 1 to 100. - using while loop

let c = 0;
let a = 0;
while (a <= 100) {
  if (a % 2 == 0) 
  console.log(a);
  a++;
}

//5.	Write a  program to print all odd number between 1 to 100.
let a = 0;
while (a <= 100) {
  if (a % 2 !== 0) 
  console.log(a);
  a++;
}

//6.	Write a  program to find sum of all natural numbers between 1 to n.

let i = 1; 
let n = 10 ; 
let sum = 0;
while (i<=n) {
    sum += i;
    i++;
}
console.log(sum);

//7.	Write a  program to find sum of all even numbers between 1 to n.




//8.	Write a  program to find sum of all odd numbers between 1 to n.

let i = 1; 
let n = 5 ; 
while (i<=10) {
    n = i * n;  
    i++;
    console.log(n);
}



//9.	Write a  program to print multiplication table of any number.

let table = 5;
let count = 10;
let i = 0;
while (i < count) {
    i++;
    console.log(table, "X", i, "=", table * i);
}

//10.	Write a  program to count number of digits in a number.


let count = 0;
let n = 123124;
while (n != 0) 
{
    n = n / 10;
    count++;
}
console.log(count);



//11.	Write a  program to find first and last digit of a number.

let n = prompt('Enter the number:');
let firstDigit = n;
let lastDigit; 
while(firstDigit >= 10 ){
    firstDigit = firstDigit / 10; 
    lastDigit = n % 10;     
}
console.log('This is the first digit:', firstDigit^0);
console.log('This is the last digit:',lastDigit);

//12.	Write a  program to find sum of first and last digit of a number.

let n = prompt('Enter the number:');
let firstDigit = n;
let lastDigit; 
while(firstDigit >= 10 ){
    firstDigit = firstDigit / 10; 
    lastDigit = n % 10;     
}
let sum = firstDigit + lastDigit;  
console.log('This is the last digit:', sum^0);



//13.	Write a  program to swap first and last digits of a number.

let digit = prompt('Enter the digit');
let firstDigit;
let lastDigit; 
let swappedNum;
lastDigit = digit %  10;   //12334 -> 4 
firstDigit = digit / 1000; //12334 -> 1 
swappedNum = lastDigit * 10000;  //40000
swappedNum = swappedNum + (digit % 10000); // 42334
swappedNum = swappedNum - lastDigit; // 42330
swappedNum = swappedNum + firstDigit; // 42331
console.log(swappedNum^0);




//14.	Write a  program to calculate sum of digits of a number.
let num = prompt('Enter the number:');
let sum = 0;
while(num!=0)
{
    sum += num % 10;
    num = num / 10;
}
console.log('The sum of digits:', sum^0);



// 15.	Write a  program to calculate product of digits of a number.


let num = prompt('Enter the number');
let sum = 0;
let product = 1; 
while(num> 0){
  const current = num % 10; 
    product = product * current;
    num = Math.floor(num / 10);
}
console.log(product - sum);




// 16.	Write a program to enter a number and print its reverse.
const input = 1234;
function ReturnReverse(input){
  for(let i = 0;i<input;i++){
    
  }
  return input;
}
ReturnReverse(input)

//12345   //54321 


let num = 12345 //prompt('Enter the number');
let reverse = 0; 
let LoopCount = 0; 
let daTa = 0;
while (num!==0) {
  LoopCount++
  reverse = (reverse * 10) + (num % 10);
  console.log(reverse);
  daTa = Math.round(num/ LoopCount**10);
  console.log(num);
  
 } 
 
//console.log(reverse);


// 17.	Write a C program to check whether a number is palindrome or not.
//spread operator ...

const isPalindrome = (text) => [...text].reverse().join("") === text;
//console.log(isPalindrome("123JBLHVK"));

// let n = 1234,
//   reversedN = 0,
//   remainder;

// reversed integer is stored in reversedN
// while (n !== 0) {
//   remainder = n % 10;
//   reversedN = reversedN * 10 + remainder;

//   n = (n / 10) ^ 0;
// }

// console.log(reversedN); // 10 .0
// 0
console.log([..."1123456"].reverse().join(""));


// 18.Write a program to find frequency of each digit in a given integer.

let num = prompt('Enter the digit:');
let n = num;
let frequency = [];
let base = 10;

for (let i = 0; i < base; i++) {
  frequency[i] = 0;
}

while (num != 0) {
  let lastDigit = num % 10;
  num = parseInt(num / 10);
  frequency[lastDigit]++;
}
console.log("Frequency of each digit in", num);
for (let i = 0; i < base; i++) {
  console.log("Frequency of", i, "=", frequency[i]);
}

// 19.	Write a program to enter a number and print it in words.


let num =prompt('Enter the number:');;
let reverse = 0;
console.log('Number:', num);

while(num != 0){
  reverse = (reverse * 10) + (num % 10);
  num = parseInt(num/10);
}

while(reverse != 0){
  switch(reverse % 10){
    case 0: 
    console.log("Zero ");
    break;
    case 1: 
    console.log("One ");
    break;
    case 2: 
    console.log("Two ");
    break;
    case 3: 
    console.log("Three ");
    break;
    case 4: 
    console.log("Four ");
    break;
    case 5: 
    console.log("Five ");
    break;
    case 6: 
    console.log("Six ");
    break;
    case 7: 
    console.log("Seven ");
     break;
     case 8: 
     console.log("Eight ");
     break;
     case 9: 
     console.log("Nine ");
      break;
     }
     reverse = parseInt(reverse / 10);
  
      }
  




// 20.	Write a  program to print all ASCII character with their values.

let n = 0 ;
let char = ''
while (n <= 255) {
    console.log(`ASCII value of character ${n}`,'=',char =String.fromCharCode(n));
    n++;
    //=n.charCodeAt();
}


// let s = '';
// for (var i = 0; i <= 255; i++) s += String.fromCharCode(i);
// console.log(s);

// console.log(s);


//21.	Write a  program to find power of a number using for loop.

let number = 5;
let ExpNumber = 1;
let power = 3;

let i = 0;
while (i < power ) {

  ExpNumber *= number;
// ExpNumber = ExpNumber * number;
             
i++;
}

console.log(ExpNumber);

console.log(number ** power);


// 22.	Write a program to find all factors of a number.


let num = 175;
let i = 1;
while (i <= num){
  if (num % i === 0) {
  console.log(i);
    }
  i++;
}

//23.	Write a C program to calculate factorial of a number.
!5
let num = 5; 
let i = 1;
let result = 1; 
while (i <= num) {
  result *= i;
  i++;
}
console.log(factorial);


function factorial (num) { 
let i = 1;
let result = 1; 
while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}

console.log(factorial(9));

// Object with  method factorial 
const obj = {
   factorial: function (num) { 
    let i = 1;
    let result = 1; 
    while (i <= num) {
        result *= i;
        i++;
      }
      return result;
    }

}

console.log(obj.factorial(6))

const obj = {
  factorial: (num) => {
    let i = 1;
    let result = 1;
    while (i <= num) {
      result *= i;
      i++;
    }
    return result;
  }
};
console.log(obj.factorial(8));


// 24.Write a program to find HCF (GCD) of two numbers.
function getGCD(a,b){
  if (b === 0){
    return a;
  }
  return getGCD(b,a%b);
}
console.log(getGCD(100,200));



// input 3 , 8
// Multiples of 3 are 3, 6, 9, 12, 15, 18, 21, 24...
// 3*1  3*2  3*3 3*4  24 
// 8*1  8*2  8*3 *4
// Multiples of 8 are 8, 16, 24, 32, 40..

//25. Write a C program to find LCM of two numbers.
const a = 3;
const b = 8;
let num1, num2, result;
 for(let i = 0; i <=100; i++){
  if( a*i === b*i) ;
 }
 function getLCM(a,b){
  if (a*i === 0){
    return a;
  }
  return getLCM(b,);
}
console.log(getLCM(100,200));



//num1 === num2

*/

// 26.Write a C program to check whether a number is Prime number or not.

// input 17 
// output 

let a = 15;
let chet = [];
let n = 1; 
let counter = 0;


while (a > 0) {
  if (a%n === 0){
    chet.push(n);
    counter++
  };
  
  a--;
  n++;
}

if (counter > 2 ){
  console.log(`input is not prime number ${chet}`);
}
else 
  console.log(`input is prime number ${chet}`);
