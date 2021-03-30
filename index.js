//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE



/*
1. Oldest Customer

Write a function that will find the oldest customer 
and return their name.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?


*/
function oldestCustomer(array){
  var age = 0
  var name;
for(var i=0; i<array.length;i++){
  if(array[i].age > age){
    age = array[i].age
    name = array[i].name
  }
}
return name;
};



/*
2. Youngest Customer

Write a function that will find the youngest customer and return their name.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?

*/

function youngestCustomer(array){
  var age = 50
  var name;
for(var i=0; i<array.length;i++){
  if(array[i].age < age){
    age = array[i].age
    name = array[i].name
  }
}
return name;
};
console.log(youngestCustomer(customers))



