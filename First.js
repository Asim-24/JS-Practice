///// VARIABLES AND PRINT


let name = "Asim";
const age = 22;

console.log("MYY NAMEE ISSS "+ name);
console.log("I AM "+age +" Years old");


//----------------------------------------


// PRINT MULTIPLE VAR ONCE

let Name = "Asim";
let Age = 22;
let dream = "can not be defined";

console.log(Name+" "+Age+" "+dream);

//----------------------------------------

// MULTIPLICATION OF INT VAR

let price = 500;
let quantity = 3;

let total_price = (price*quantity);

console.log(total_price);

//----------------------------------------

// SWAPPING OF TWO NUM

let a = 5;
let b = 10;

let temp = a;

a = b;
b = temp;

console.log(`a: ${a}  b: ${b}`);

//----------------------------------------


// TAKE INPUT, PRINT OUTPUT.

let name = prompt("what is your name ?");
let age = prompt("what is your age ?");
let goal = prompt("what is your goal ?");


console.log("Hello, my name is "+name);
console.log("I am "+age+" years old");
console.log("My goal is to become a "+goal);

//----------------------------------------

// OPERATIONS ON OBJECT

const Asim = {
    Fullname : "Asim",
    Age : 22,
    cgpa : 8.8,
    is_pass : true,
};

Asim.Age = Asim.Age + 1;

Asim["Fullname"] = Asim["Fullname"] + " Shaikh";

console.log(`some_text_here ${Asim["Age"]} and_some_here_too`);

console.log(Asim["Age"] +' '+ Asim["Fullname"]);

console.log(Asim["Fullname"]);


//----------------------------------------


///// OPERATORS


//----------------------------------------


// I.  ARITHMETIC OPERATORS

//----------------------------------------

// 1. + - ADD

let a = 5;
let b = 10;

const ans = a+b;

console.log(ans);

//----------------------------------------

// 2. - - SUBTRACT

let a = 10;
let b = 5;

const ans = a-b;

console.log(ans);

//----------------------------------------

// 3. * -MULTIPLY

let a = 10;
let b = 5;

const ans = a*b;

console.log(ans);

//----------------------------------------

// 4.  / -DIVIDE

let a = 10;
let b = 5;

const ans = a/b;

console.log(ans);

//----------------------------------------

// 5. - modulus % -  ( gives remainder after doing / )

let a = 10;
let b = 5;

const ans = a%b;

console.log(ans);

//----------------------------------------

// 6. - exponential - ** ( raist to calculation)

let a = 10;
let b = 5;

const ans = a**b;

console.log(ans);

//----------------------------------------

// 7. - pre-increment - ++ (increase by 1)

let a = 10;

console.log("++a: " + ++a);

//----------------------------------------

// 8. - pre-decrement - -- ( decrese by 1)

let a = 10;

console.log("--a: " + --a);

//----------------------------------------

// 9. - post increment 

let a = 5;

console.log("a: " + a++);

console.log("a++: " + a);

//----------------------------------------

// 10. - post decrement

let a = 5;

console.log("a: " + a--);

console.log("a--: " + a);

// ( PRE - FIRST UPDATE THEN EXECUTE, POST - FIRST EXECUTE THEN UPDATE )


//----------------------------------------

// II.  ASSIGNMENT OPERATORS

//----------------------------------------

// 1. = simply assigning the value into a variable

let a = "Fullname";

//----------------------------------------

// 2. +=  add & store the result into itself

let a = 5;

a += 1;

console.log(a);

//----------------------------------------

// 3. -= substract and store the result into itself

let a = "asim";

a -= "as";

console.log(a);

// same goes for  += -= *= /= %= **=  ( PERFORM THE ACTION WITH VARIABLE AND SAVE THE UPDATED VALUE INTO THE VARIABLE ITSELF)

//----------------------------------------//----------------------------------------

// III. COMPARISON OPERATORS

//----------------------------------------

// 1. == Equals to  -

let a = 5;

let b = 10;

console.log(a==b); // its askin Equal ? - false

//----------------------------------------

// 2. != not Equals to

let a = 5;

let b = 5;

console.log(a!=b); //

//----------------------------------------

// 3. === equals to with type  -compares values and types

let a = 5;
let b = "5";

console.log(a==b); // true - value same

console.log(a===b); // false - value equal but type diff

//----------------------------------------

// 4. !== Not Equals to with type

let a = 5;
let b = 5;

console.log(a!=b);
console.log(a!==b);

//----------------------------------------

// 5. < > greater then and less then

let a = 5;
let b = 10;

console.log(a<b);
console.log(a>b);

//----------------------------------------

// 6. <= >=  less then equals to and greater then equals to

let a = 5
let b = 5;

console.log(a<=b);
console.log(a>=b);


//----------------------------------------

// IV. LOGICAL OPERATORS

//----------------------------------------

// 1. AND &&  - if both true then true otherwise false

let a = 5;
let b = 10;

let condition1 = (a<b); // true
let condition2 = (a>b) // false

console.log(condition1 && condition2); // true + flase = false

//----------------------------------------

// 2. OR || - even if one is true then true otherwise false

let a = 5;
let b = 10;

let condition1 = (a<b); // true
let condition2 = (a>b) // false

console.log(condition1 || condition2); // true + false = true

//----------------------------------------

// 3. NOT ! =  if true then false - if false then true  ( reverse logic)

let a = 5;
let b = 10;

let condition1 = (a<b); // true
let condition2 = (a>b) // false

console.log(!(condition1)) // not of condition 1 = true => false


//----------------------------------------

///// CONDITIONAL STATEMENTS

//----------------------------------------

// 1. IF STATEMENT

//----------------------------------------

// ex. 1 -

let mode = "dark";

if (mode == "dark"){
    console.log("dark mode");
};

//----------------------------------------

// ex. 2 -

let age = 22;

if (age >= 18){
    console.log("can vote");
};

//----------------------------------------

// 2. IF-ELSE STATEMENT

//----------------------------------------

// ex. 1 -

let mode = "dark ";

if(mode == "light"){
    console.log("light mode");
} else {
    console.log("dark mode");
};

//----------------------------------------

// ex. 2 -

let age = 22;

if (age <= 18){
    console.log("can not vote");
} else {
    console.log("can vote");
}


//----------------------------------------

// 3. ELSE-IF 

let age = prompt("What is your age?");

if (age < 18) {
    console.log("not adult");
} else if (age < 60) {
    console.log("adult");
} else if (age > 60) {
    console.log("old");
} else {
    console.log(null);
}


//----------------------------------------


// ### MINI challenge -- WRITE A PROGRAM TO CHECK IF THE NUMBER IS EVEN OR ODD

let num = prompt("Enter Num");

let ans = (num%2);

console.log(ans);

if (ans == 0){
    console.log(num + " is EVEN");
} else {
    console.log(num + " is ODD");
};


//----------------------------------------


// 4.  TERNARY OPERATOR - syntax - condition ? A : B - if the condition is true, A gets executed, if false then B gets executed.

let age = prompt("what is your age ?");

// let result = age > 18 ? "adult" : "not adult";

age > 18 ? console.log("adult") : console.log("not adult");

// console.log(result);

//----------------------------------------

// ### MINI challenge - WRITE A CODE TO CHECK IF THE GIVEN NUMBER IS A MULTIPLE OF 5, ALSO DO IT FOR NUM = 3.

// for 5 - 

let num = prompt("Enter Num");

num % 5 == 0 ? console.log(num + " is Multiple of 5") : console.log(num + " is Not Multiple of 5");

// for 3 -

let num = prompt("Enter Num");

num % 3 == 0 ? console.log(num + " is Multiple of 3") : console.log(num + " is Not Multiple of 3");

//----------------------------------------

// ### MINI challenge - WRITE A CODE TO GIVE GRADES TO STUDENTS ACCORDING TO THEIR MARKS

// SOL 1 

let marks = Number(prompt("Enter your Makrs"));

if (marks >= 80){
    console.log(" YOUR GRADE IS 'A' ");
} else if ( marks >= 70){
    console.log("YOUR GRADE IS 'B' ");
} else if (marks >=60) {
    console.log("YOUR GRADE IS 'C' ");
} else if (marks >= 50){
    console.log("YOUR GRADE IS 'D' ");
} else if (marks < 50){
    console.log("YOUR GRADE IS 'F' ");
}

//----------------------------------------

// SOL 2 

let marks = Number(prompt("Enter your marks"));

if ( marks > 100 || marks < 0 ){
    console.log("INVALID MARKS!")
}else if ( marks <= 100 && marks >= 90 ){
    console.log("A")
} else if ( marks < 90 && marks >= 70 ){
    console.log("B")
} else if (marks < 70 && marks >= 60){
    console.log("C")
} else if ( marks < 60 && marks >= 50){
    console.log("D")
} else if ( marks < 50 && marks >= 0 ){
    console.log("F");
}

//----------------------------------------//----------------------------------------

// ### mini challenge - TAKE 2 NUM AND PRINT THE GREATER ONE

let num1 = Number(prompt("Enter Number 1"));

let num2 = Number(prompt("Enter Number 2"));

if (num1 > num2 ){
    console.log("Number 1 is greater")
} else {
    console.log("Number 2 is greater")
}

//----------------------------------------//----------------------------------------

// ### Mini challenge - compare 3 num & print the greatest

// SOL 1 - compare one number with three using && 

let num1 = Number(prompt("Enter Number 1"));

let num2 = Number(prompt("Enter Number 2"));

let num3 = Number(prompt("Enter Number 3"));

if (num1 > num2 && num1 > num3){
    console.log(num1 + " is greatest")
} else if (num2 > num1 && num2 > num3){
    console.log(num2 + " is greatest")
} else if (num3 > num1 && num3 > num1){
    console.log(num3 + " is greatest")
}

//----------------------------------------

// SOL 2 - by using var higher

let num1 = Number(prompt("Enter Number 1"));

let num2 = Number(prompt("Enter Number 2"));

let num3 = Number(prompt("Enter Number 3"));

let higher;

if (num1 > num2){
    higher = num1;
} else {
    higher = num2;
}

if (higher > num3){
    console.log(higher + " is greater");
} else {
    console.log(num3 + " is greater");
}


//----------------------------------------

///// LOOPS

/* LOOP NEEDS ONE UPDATING CONDITION, ONE STOPPING CONDITION, BUT FOR THE BOTH WE NEED A VARIABLE TO USE IN THAT, 
 THE VARIABLE CAN BE EXTERNAL, BUT GENERALLY THE VARIABLE IS INITIALIZED IN  THE LOOP ( IN FOR LOOP ) 
 IN WHILE LOOP THE INITIALIZATION IS DONE OUTSIDE OF THE LOOP THEN WRITE THE STOPPING CONDITON AND THEN THE UPDATING CODITION INSIDE IT.
 FOR IS USED WHEN U KNOW WHEN TO STOP, THE STOPPING CONDITION IS FIXED, 
 WHILE IS PERFECT WHEN THE STOPPING CONDITION IS UNDEFINED.
*/

//----------------------------------------

// FOR LOOP - PRINT MMULTIPLE TIMES

for (let i=1; i <= 10; i++){
    console.log("Asim");
}

//----------------------------------------

// ### SUM OF 1 - N NUMBERS


let sum = 0;

for (let i = 1; i <=115; i++){
    sum = sum + i;
}

console.log(sum);
console.log("The Loop is Ended");

//----------------------------------------

// ### PRINTING I - VISUALISING LOOP

for(let i = 1; i <=5; i++){
    console.log("i :", i);
}

//----------------------------------------

// ### INFINITE LOOP 

// A LOOP THAT NEVER ENDS == RESTRICTED  ( THE STOPPING CONDITION IS ALWAYS TRUE SO THE LOOP KEEPS GOING ON )

for(let i = 1; i > 0; i++){
    console.log(i);
}

//----------------------------------------//----------------------------------------

// WHILE LOOP

// ### FIRST WHILE LOOP EX -

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// USER WHEN THE STOPPING CONDITION IS NOT PER-DEFINED

// SECOND WHILE LOOP EXAMPLE, IMPLIMENTATION -

let password = "";

while(password !== "admin"){
    password = prompt("Enter Your Password");
}

//----------------------------------------

// DO-WHILE LOOP

// RUN THE LOOP FIRST THEN CHECK THE CONDITION LATER - THE LOOP WILL EXECUTE ATLEAST ONCE EVEN IF THE CONDITION IS FALSE DIRECTLY IN FIRST CHECK.

// FIRST EX OF DO-WHILE

let i = 10;

do{
    console.log("i =", i);
    i++
} while(i <=5)


// SECOND EX

let i = 50;

do{
    console.log("ASIM");
    i++;
} while ( i <= 15 );

//----------------------------------------

// FOR-OF-LOOP

// USED TO PERFORM ACTIONS ON STRING AND ARRAYS -  PICK A STRING VARIABLE - CREATE ONE VARIABLE FOR LOOP, IN EACH ITERATION THE LOOP VAR HOLDS A SINGLE CHAR FROM THE TARGETED STRING AND THE LOOP COMPLETES WHEN THE STRING ENDS. IF ITS A ARRAY THE IT PICKS ONE VALUE AT A TIME.

let name ="AsimShaikh";

let count = 0;

for(let i of name){
    console.log(i);
    count++
}

console.log(count);

//----------------------------------------

// EX 2 - FOR-OF LOOP

let name = "Asim";

let num = 0;

for(let count of name){
    console.log(count);
    num++;
}

console.log(num);

//----------------------------------------//----------------------------------------

// FOR-IN LOOP

// IF USED ON OBJECTS GIVE KEYS, IF USED ON ARRAY OR STRING, GIVES INDEX ONE BY ONE, SAME LOGIC LIKE FOR-OF, DIFF IS - VALUES VS KEYS & INDEX

// EX -

let student = {
    name : "Asim",
    age : 22,
    cgpa : 7.5,
    is_pass : true,
};

for(let keys in student){
    console.log(keys, "=", student[keys]);
    console.log("ITERATION done!!!");
}

//----------------------------------------

// SOME PRACTICE QUESTIONS -

//----------------------------------------

// ###  PRINT ALL EVEN NO. FROM 0-100

// USING I DIRECTLY

for(let i=2; i <=100; i=i+2){
    console.log(i);
};

// BY CREATING ANOTHER VARIABLE AND USING ITSELF IN STOPPING CONDITION AND UPDATING CONDITION

let num = 2;

for(let count = 1; num <=100; num = num + 2){
    console.log(num);
};

//----------------------------------------//----------------------------------------

// ### GUESS THE GAME NUMBER -

// SOL 1.

let num;

for(let i = 0; num !== 25;){
    num = Number (prompt("Enter Your Guess"));
}

//----------------------------------------

// SOL 2.

let gamenum = 25;
let usernum = Number(prompt("Enter your Guess"));

for(let i = 0; usernum !== gamenum;){
    usernum = Number(prompt("Enter your Guess Again"));
}

console.log("YOU WON");


//----------------------------------------

///// STRINGS

//----------------------------------------

// SIMPLE STRING

let str = "Asim";

//----------------------------------------

// INBUILD PROPERTIES

// str.length

str.length;

// str[index_no] - to get the char on the index no. in a string

str[0];

//----------------------------------------//----------------------------------------

// TEMPLATE LITERALS - EMBEDDING THE EXPRESSIONS AND VARIABLES INTO A SINGLE STRING. ( ANOTHER WAY TO WRITE STRING + VARIABLE ) ( NOT A STRING PROPERTY )

let str = "asim";
let str1 = 22;

// NORMAL WAY
console.log("my name is ", str, "and i am", str1, "years old");


// TEMPLATE LITERAL - STRING INTERPOLATION - THE ENTIRE THING BECOMES A SINGLE STRING - ADDING THE PLACEHOLDERS FOR USING VARIABLES AND EXPRESSIONS.
console.log(`My name is ${str} and i am ${str1} years old`);


// ADDING AN EXPRESSION IN TEMPLATE LITERALS - ( expression - (1+2+3))

console.log(`adding 3 numbers which equals to ${1+2+3}`);


// ESCAPE CHARS - \n nxt line - \t  tab space       - counted as one char by .length property

//----------------------------------------

// STRING INBUILD METHODS / FUNCTIONS

// THIS IS UPPER CASE   this one is lower case  thisOneIsCamelCase  ThisOneIsPascalCase

//----------------------------------------

// 1. str.toUpperCase & str.toLowerCase     - use () in the end cuz its a function.

let str = "AsimShaikh";

console.log(str.toUpperCase());

console.log(str.toLowerCase());

// doing str.toUpperCase() or lower, does not change the original string, is will be stored in another var or the same var needs to be re-defined or used directly

// STRINGS ARE IMMUTABLE IN JS, TO MAKE CHANGES CREATE NEW STRING OR MANUALLY UPDATE ( RE-DECLARE ) THE STRINGS.

//----------------------------------------

// trim functino - it removes the whitespace before and after the string (Not in between)

let str = "     Asim Writing      JS     ";

console.log(str.trim());

//----------------------------------------

// STRING SLICE str.slice() to slict the part of the string using index values

let str = "ABCDEFGHI";

console.log(str.slice(0,5)); // 5 is not included its the limit

console.log(str.slice(2)); // if no ending index then consider all

//----------------------------------------

// STRING CONCATINATION  - COMBINE TWO STRINGS

let str = "this is ";
let str1 = "a string";

console.log(str.concat(str1));

//----------------------------------------

// REPLACE PART OF A STRING - STR.REPLACE(SEARCH-VAL, NEW-VAL);

let str = "Ball";

console.log(str.replace("B", "H"));

console.log(str.replace("ll","y"));

console.log(str.replace("l", "w"));  // REPLACE THE FIRST MATCH

console.log(str.replaceAll("l", "t")); // REPLACE ALL MATCHES

//----------------------------------------

// str.charAt() - to check the char on specific index

let str = "AsimShaikh";

console.log(str.charAt(0));

console.log(str.charAt(9));

//----------------------------------------

//  ### MINI challenge - TAKE THE USERS FULL NAME, GENERATE THE USERNAME FOR THE USER, START WITH @ FOLLOWED BY THE FULL NAME AND END WITH FULL NAME LENGTH

let username = prompt("Enter Your FullName");

console.log(`Your Username is @${username}${username.length}`);

// ### MINI challenge - Create a program that counts how many vowels (a, e, i, o, u) are present in a string.

let str = "AsimShaikh";

let count = 0;

for(let i of str){
    if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" || i==="A" || i==="E" || i==="I" || i==="O" || i==="U"){
        console.log(i)
        count++
    };
}

console.log("Total Vowels = ", count);

let str="AsimShaikh";

let count = 0;

for(let i of str){
    if (i.includes("aeiouAeiou")){
        console.log(i);
        count++
    }
}

//----------------------------------------

///// ARRAYS

// STORE MULTIPLE VALUES IN ONE VARIABLE LINEARLY, VALUES ARE INDEXED, CAN STORE DIFF TYPE OF VALUES IN A SINGLE ARRAY.

// EXAMPLE OF ARRAY -

let arr = ["Asim", "Xyz", "Batman", "ABC", "OXD"];

console.log(arr);

// ALL THE VALUES ARE INDEXED STARTING FROM 0

arr[1] = "ijk";     // changed the value of original array directly, no need to make new array to store updated array

console.log(arr);


// ARRAYS ARE MUTABLE ( VALUES CAN BE CHANGED DIRECTLY ) BUT STRINGS ARE NOT, THEY CREATE A NEW VAR TO STORE CHANGED VALUE


// APPLYING LOOP ON ARRAY TO PRINT ALL THE VALUES OF THE ARRAY

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


//----------------------------------------

// ### MINI challenge - FIND THE AVERAGE MARKS [85, 97, 44, 37, 76, 60] FROM THIS ARRAY OF STUDENTS MARKS

let marks = [85, 97, 44, 37, 76, 60];

let total_marks = 0;

for(let avg of marks){
    total_marks += avg;
}

let average = total_marks / marks.length;

console.log(average);

//----------------------------------------

// ### MINI challenge - UPDATE THE ITEMS PRICE AFTER APPLYING 10% DISCOUNT ON EACH ITEM

//----------------------------------------

// solution using for of loop

let items = [250, 645, 300, 900, 50];

let i = 0;

for(let val of items){
    let offer = val / 10;
    items[i] = val - offer;
    console.log(items[i]);
    i++
}

//----------------------------------------

// solution using for loop


let items = [250, 645, 300, 900, 50];

for(let i = 0; i < 5; i++){
    let offer = items[i] / 10;
    let val = items[i] - offer;
    console.log(val);
}

//----------------------------------------//----------------------------------------//----------------------------------------//----------------------------------------

// ARRAY METHODS        -- TWO TYPES        1. CHANGES THE ARRAY ITSELF           2. STORE THE UPDATES INFO IN A NEW ARRAY

//----------------------------------------//----------------------------------------

// TYPE 1

//----------------------------------------

// arr.unshift();     - ADD TO START

let arr = ["item1", "item2", "item3", "item4", "item5"];

arr.unshift("item-1", "item0");

console.log(arr);

//----------------------------------------

// arr.shift();  -   REMOVE FROM START

let arr = ["item1", "item2", "item3", "item4", "item5"];

let deleted_items = arr.shift();

console.log(arr);

console.log("deleted_items : ", deleted_items);

//----------------------------------------

// arr.push();  - ADD TO END

let arr = ["item1", "item2", "item3", "item4", "item5"];

arr.push("item6", "item7");

console.log(arr);

//----------------------------------------

// arr.pop() - REMOVE FROM END

let arr = ["item1", "item2", "item3", "item4", "item5"];

let deleted_item = arr.pop();

console.log(arr);

console.log("deleted_item : ", deleted_item);

//----------------------------------------

// SPLICE METHOD -  OPPOSITE OF SLICE  -  arr.splice(starting_index,del_count, new_elements); - this removes elements from starting index including starting index itself, then push new elements.

let arr = ["item1", "item2", "item3", "item4", "item5"];

let new_arr = arr.splice(2, 2, "New_item", "New_item");

console.log(arr);


//----------------------------------------

// ADDING VALUES IN ARRAY USING SPLICE

let arr = ["item1", "item2", "item3", "item4", "item5"];

arr.splice(0, 0, "item0");

console.log(arr);

// - splice() always counts on the current item so it replaces the same item in this (0,1,"replacing_item") condition.

//----------------------------------------

// TYPE 2

//----------------------------------------

// CONVERT INTO STRING METHOD - toString()  - returns the values of a array in the string form seperated by ,

let arr = ["item1", "item2", "item3", "item4", "item5"];

let Array_String = arr.toString();

console.log(arr);

console.log("Array_String : ", Array_String);

//----------------------------------------

// CONCAT METHOD  -  arr.conccat()  - combines two arrays & returns the combined value ( no change in original array)

let arr = ["item1", "item2", "item3", "item4", "item5"];

let ary = ["item6", "item7"];

let combined = arr.concat(ary);

console.log("combined array : ", combined);

// MULTI STRING CONCAT

let aryy = ["item8", "item9"];

let triple = arr.concat(ary, aryy);

console.log("Triple : ",triple);

console.log("Og_array :" ,arr);

//----------------------------------------

// SLICE METHOD  -  arr.slice()  - RETURNS A SPECIFIC PART OF ARRAY 

let arr = ["item1", "item2", "item3", "item4", "item5"];

console.log(arr.slice(0,3));

console.log(arr.slice(3,arr.length));

//----------------------------------------

// ### MINI challengeES - 

//----------------------------------------

// ### 1. SUM OF ALL VALUES OF ARRAY

let arr = [12,33,35,25,10,23,43];

let i = 0;

let sum = 0;

while(i < arr.length){
    sum += arr[i];
    i++;
}

console.log(sum);

//----------------------------------------

// SOL 2 - USING arr.reduce()

let arr = [12,33,35,25,10,23,43];

let sum = arr.reduce( (x, y) => { return x + y; }, 0 );

console.log(sum);

//----------------------------------------

// REDUCE METHOD OF ARRAYS

/* arr.reduce() - ARRAY METHOD  - 

    ONE ACCUMULATOR WHICH holds THE VALUE,0 IS INITIAL VALUE GIVEN TO IT,
    
    CURR IS CURRENT VALUE OF ARRAY, IT STARTS FROM THE FIRST VALUE OF THE ARRAY ( NOT FIRST INDEX, FIRST VALUE ) AND ITIRATES OVER THE VALUES OF ARRAY ONE BY ONE.

    .REDUCE iterate ON ARRAY AND THE CURR STORE THE VALUES ONE BY ONE IN EVERY ITERATION,

    RETURN - PASS THE VALUE TO ACCUMULATOR FOR NEXT ITERATION.

    array.reduce((accumulator, currentValue) => {
        return updatedAccumulator;
    }, initialValue);
    

    arr.reduce((acc, curr) => { return acc + curr; }, 0);

this program adds the values of array one by one using accumulator for storing value (sum) and seond variable iterates on every value of the array

 */

// U NEED TO WRITE A FUNCTION FOR REDUCE METHOD - reduce method is written in { ARROW FUNCTION } which is a compact way to write function and its perfect to use with reduce method.

    const example = (x, y ) => { return x + y; };
    const examplee = (x, y) => x + y;   // where there is only one expression in it, no need of {} blocks


//----------------------------------------

// ### 2. -  find the largest num in the array - let arr = [12, 45, 7, 89, 23];

let arr = [12, 45, 7, 89, 23];

let largest = arr[0];

for(let i = 1; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    };
    console.log(largest);
}

console.log(largest);

//----------------------------------------

// ### 3. find the even numbers from the array and print them array = let arr = [2, 5, 8, 11, 14, 17];


let arr = [2, 5, 8, 11, 14, 17];

let sum = 0;

let count = 0;

for(let i = 0; i < arr.length; i++){
    sum = arr[i] % 2;
    if(sum === 0){
        count++
    };
}

console.log(count);

//----------------------------------------

/// ### 4. add string in the end of an array using arr.methods

let arr = [2, 5, 8, 11, 14, 17]; // random array

arr.push("mango");

console.log(arr);

//----------------------------------------

/// ### 5. print the following array in reverse without using the reverse method

let arr = [2, 5, 8, 11, 14, 17];

let reversed = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
}

console.log(reversed);

console.log(arr.reverse());  // also example of reverse method

//----------------------------------------

// ### 6. replace "orange" with "banana" in the following array let fruits = ["Apple", "Orange", "Mango"];

let fruits = ["Apple", "Orange", "Mango"];

fruits.splice(1, 1, "banana");

console.log(fruits);

//----------------------------------------

// ### 7. insert "watermelon" in the index 2    let fruits = ["Apple", "Banana", "Mango"];

let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(2, 0, "watermelon");

console.log(fruits);

//----------------------------------------

// ### 8. Create a new array which has only even numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let even = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        even.push(arr[i]);
    }
}

console.log(even);

//----------------------------------------

// ### 9. Double the original numbers of an array and store them in a new array

let arr = [2, 4, 6, 8];

let double = [];

for(let i = 0; i < arr.length; i++){
    exp = arr[i] * 2;
    double.push(exp);  
}

console.log(double);

//----------------------------------------

// ### 10. Count how many a's are there in the array

let letters = ["a", "b", "c", "a", "d", "a"];

let count = 0;

for(let i of letters){
    if(i === "a"){
        count++;
    }
}

console.log(count);

//----------------------------------------

// ### 11. check if the array is sorted or not

let arr = [10, 20, 30, 40, 50];

let sorted = true ;

for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] > arr[i+1]){
        sorted = false ;
        break;
    }
}

console.log(sorted);

//----------------------------------------

// ### 12. remove duplicate values from an array

let arr = [1, 2, 2, 3, 4, 4, 5];

let new_arr = [];

for(let i of arr){
    if(new_arr.includes(i)){
    } else {
        new_arr.push(i);
    }
}

console.log(new_arr);

//----------------------------------------

// ### 13. Find the second largest numberber from the array

let arr = [10, 45, 67, 89, 23, 89];

let largest = 0;
let second_largest = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        second_largest = largest;
        largest = arr[i];
    } else if(arr[i] > second_largest && largest !== arr[i]) {
        second_largest = arr[i];
    }
}

console.log(largest);
console.log(second_largest);

//----------------------------------------

// ### 14. rotate the array values to right by 1 - [1, 2, 3, 4, 5]  -- algo = run a loop to assign the value to its previous value using i - 1, this will swap the numbers, increasing their index by 1, but the number on the first index can not be swaped with the last one using loop so did it manually,


let arr = [1, 2, 3, 4, 5];

let temp = arr[arr.length -1]

for(let i = arr.length - 1; i > 0; i-- ){
    arr[i] = arr[i - 1];
}


arr[0] = temp;

console.log(arr);

//----------------------------------------

// ### 15. Check if an element appears more than 3 times in an array

let arr = [1, 2, 2, 2, 2, 3];

let count = 0;

let found = false;

for(let i = 0; i < arr.length; i++){

    count = 0;

    for(let j = 0; j < arr.length; j++ ){
        
        if(arr[i] === arr[j]){
            
            count++

        }
    }

    if(count>3){
        found = true;
        break;
    }
}

console.log(found);

//----------------------------------------

// FUNCTIONS - A PART OF CODE WHICH CAN BE CALLED MULTIPLE TIMES TO PERFORM SOME PRE-DEFINED ACTIONS, AS MANY TIMES AS U WANT.

function first_function() {
    console.log("this is my first function");
    console.log("im learning js ");
}

//  PARAMETERS - PLACEHOLDER VARIABLES GIVEN WHEN DEFINING A FUNCTION,  ARGUMENTS - ACTUAL VALUES YOU PASS TO THE FUNCTION WHEN CALLING / INVOKING FUNCTION 
// PARAMETERS (X,Y) - GIVEN WHEN DEFINING FUNCTION.  ARGUMENTS (5,10) GIVEN WHEN CALLING / INVOKING A FUNCTION.

// A SIMPLE FUNCTION - ADDITION OF TWO NUMBERS

// DEFINING -

function addition(x,y){
    let num1 = x;
    let num2 = y;

    let sum = x + y;

    console.log("Sum : ", sum);
}

// CALLING -

addition(20,30);

// FUNCTIONS CAN BE STORED IN A VARIABLE FOR DIFF PURPOSES AND USECASES - HERE -

// ARROW FUNCTIONS - A SHORTER WAY TO WRITE FUNCTIONS.
// SPECIAL PURPOSE - SHORT SYNTAX, USE OF THIS KEYWORD IS HANDLED DIFFERENTLY.

const arrow = (x, y) => { return x+y;};


// can be short when you only have to give one parameter

const square = num => num + num;

square(10);

// EVEN SHORTER

const add = (a, b) => a + b;

//----------------------------------------

// maximum product of any two numbers from the array.    ( finding 2 highest num first )

const arr = [1, 2, 4, 3, 5, 6];

let second_largest = -Infinity;

let largest = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i]>largest){
        second_largest = largest;
        largest = arr[i]
    } else if(arr[i]>second_largest) {
        second_largest = arr[i]
    }
}

console.log("product: ", second_largest*largest);