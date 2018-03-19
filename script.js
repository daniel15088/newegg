
//call "node script.js" to run file

//define function isPrime
//returns whether n is prime
function isPrime(n){
  //define variable named divisor with value 2
  var divisor = 2;

  // while n > divisor, keep running code inside the while loop
  //n = 137, divisor = 2
  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else {
      divisor++;
    }
  }
  return true;
}

//console.log = print
//call function isPrime with argument 137
//console.log(isPrime(137));

/* Mathematical functions
a = 2+3; // 5
a = 4-3; // 1
a = 2*3; // 6
a = 4/2; // 2
a = 5/2; // 2
a = 7/3; // 2
a = 5%2 // 1
a = 4%2 // 0
a = 120%7 // 1
a = 120/7 // 17

120 = 17*7 + 120%7

*/

// i++ is the same as i+=1 which is the sames as i = i+1
// i = 2;
// i = i+1;
// write function that prints every multiple of 3 up to 27
function printThree () {
	var n = 3;
	// console.log(3);
	// console.log(6);

	// start with i = 0
	// if i < 9, then do third step 
	//  increases i by 1 and run loop
	for (var i = 0; i < 4; i+=1) {
		console.log(n + i*3);
	    //3
	    //6
	    //9
	    //12 
	    //15
	}
}

//printThree();


function printNumbers(){
	for (var i = 1; i < 9; i++) {
		console.log(i);
	}
	// 1
	// 2
	// 3 
	// 4 
	// ...
	// 8
	// 9
}


function printNumbers(){
	var i = 1;
	while (i < 10) {
		console.log(i);
		i++;
	}
	// 1
	// 2
	// ...
	// 8
	// 9 

}
function printNumbersFive(){
	for (var i = 1; i < 7; i++) {
		console.log(i*5);
	}
}

//printNumbers();


function printTwo(){
	for (var i = 0; i<10; i = i+2) {
		console.log(i+1);
	}
}

function printNumbersSix(){
	for (var i = 1; i < 243; i = i*3){
		console.log(i);
	}
}
//printNumbersSix();

function printProblem(){
	for (var i = 2; i < 17; i = i+3){
		console.log(i);
	}
}
//printProblem()

function printBySix(){
	for (var i = 6; i < 30; i = i+6){
		console.log(i)
	}
	}
//printBySix()
function printLoop(){
	var i = 6;
	while (i < 30) {
		console.log(i)
		i = i+6;
	}
}
//printLoop()
function printLoops(){
	var i = 2;
	while (i < 17){
		console.log(i);
		i = i + 3;
	}
}
//printLoops()




// return true if n is even, return false if n is odd
function isEven(n) {
	// // if 2 is equivalent to 3
	// if (2==3) {
	// 	console.log ("Hi");
	// }
	// // if 2 is not equivalent to 3
	// if (2!==3) {
	// 	console.log ("bye");
	// }

	// 	// if 2 is equivalent to 3
	// if (2==3) {
	// 	console.log ("Hi2");
	// }
	// else {
	// 	console.log ("bye2");
	// }
	if (n%2==0){
		console.log ("True");
	}
	else {
		console.log("False");
	}
}
//isEven(6);

// add numbers a and b
function addNumbers(a,b) {
	console.log(a+b);
}

//addNumbers(3,5);
function multplyNumbers(a,b){
	console.log(a*b);
}
//multplyNumbers(7,2);


//if a+b is even, print true, otherwise print false
function isEven(a,b){
	var c = a+b;
	if (c%2==0) 
	{
		console.log("True")
	} else
	{
		console.log("False")
	}

}
//isEven(4,4)

// array = list of items
//print every item in array
function printArray(){
	var sports = ["soccer", "baseball", "basketball", "tennis"];
	// console.log(sports[0]) // "soccer"
	// console.log(sports[1]) // "baseball"
	//console.log(sports[2]) // "basketball"
	for (var i = 0; i < sports.length; i++) {
		console.log(sports[i]);
	}
}
//printArray();

// hash table is a way to quickly grab value
function printBabyName(){
	//hash table with array as values
	var names = {boy: ["Adam", "Max", "Bob", "Sam"], girl: ["Eve", "Wendy", "Christine", "Sarah"]};
	var girlNames = names.girl;
	var boyNames = names.boy;
	for (var i = 0; i < girlNames.length; i++){
		console.log(girlNames[i]);
	}
}
//printBabyName()


var array = {
	name: "sports",
	length: 4
}

var human = {
	name: "John Smith",
	eye: "blue",
	gender: "male",
	hometown: "Los Angeles",
}

//console.log(human.hometown)


var roundChair = {
	color: "black",
	numberLegs: 4,
	topShape: "round",
	material: "steel"
}

var squareChair =  {
	color: "black",
	numberLegs: 4,
	topShape: "square",
	material: "steel"
}

var chair = {
	color: "black",
	numberLegs: 4,
	material: "steel"
}


//DON'T USE CODE, PSEUDOCODE
var roundChair = Object.create(chair);
roundChair.topShape = "round";
