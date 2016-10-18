
//Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.


//Array of Presidents 

var presidents = [" Obama", " Bush", " Clinton", " Bush", " Reagan"];
var text = ""
var i;

//for loop that uses counter variable to increment by 10 each time it executes

for ( var i = 5; i <= 120; i = i + 10 ){
	console.log("Current Count:" + i);
}

//create a for loop that uses counter variable to divide by 2 each time it executes

for ( var i = 4096; i > 1; i = i / 2){
	console.log("Value:", i );
}

for (var i = 0; i < presidents.length; i++){ 
	console.log("President #" + (i + 1) + presidents[i]);
} 

//use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for (prop in antSpecies){
	console.log("antSpecies " + prop + "= " + antSpecies[prop])
}