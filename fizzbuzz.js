var readlineSync = require('readline-sync');
var name = readlineSync.question('what is your namebro');
console.log("hello," + name +"!");


 //function fizzbuzz(num){
    for(let i=1; i <=100; i++) {
      if (i % 3 ==0 && i % 5 == 0) console.log("fizzbuzz"+ "");
       else if(i % 5 == 0) console.log ("buzz");
        else if(i  % 3 == 0) console.log("fizz");
          else console.log (i );
    }
 // }

//fizzbuzz(100);

//lines 15 and 6 is how to do the assignment with stating a function
// i did it with out stating the function in the final version
//makes me quesion wether or not for loops are actual objects and functions themselves
//this would mean for this type of project making a function on top of the for loop is 
// just extra code and unneccasry unless later i wanted to call on this object?





//first attempt super sloppy  
//i started to realise i needed to use a "for loop"







//var num = new Array(100);

 //  function divThree(num%3){
   // console.log("fizz")
  // };

  // function divfive(num){
//console.log("buzz")
//
 //  };

  //  function divthfr(num%15){
  //      console.log ("fizzbuzz")
  //  } 
   

