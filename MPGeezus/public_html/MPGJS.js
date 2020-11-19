/* 
Patrick L. Mackey CIS 119 Prof. K. Miller UNIT 5 TEST
 */

GAS = Number(prompt("Enter the amount of gas in gallons your car holds"));
MILES = Number(prompt("Enter the max. number of miles you can drive with a full tank"));
 function MPGeezus(GAS,MILES){
     MPG = MILES/GAS;
     return MPG;
 }
document.write(MPGeezus(GAS,MILES)+' is the number of miles you drive per 1 gallon of gas or MPG');