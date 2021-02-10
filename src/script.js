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

*/

// 17.	Write a C program to check whether a number is palindrome or not.