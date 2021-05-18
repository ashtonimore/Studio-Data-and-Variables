// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
const input = require('readline-sync');
let astronautCount = Number(input.question("How many astronauts are there? "))

let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelcius = -225;
let fuelLevel = 1;
let weatherStatus = 'clear';



// Write code to generate the LC04 report here:
let theLine = "-------------------------------------";
console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);
console.log("Date: " + date);
console.log("Time: " + time);
console.log();
console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* count: " + astronautCount);
console.log("* status: "+ astronautStatus);
console.log();
console.log(theLine);
console.log("> FUEL DATA");
console.log(theLine);
console.log("* Fuel temp celcius: " + fuelTempCelcius + " C");
console.log("* Fuel level: " + (fuelLevel / .01) + "%");
console.log();
console.log(theLine);
console.log("> MASS DATA");
console.log(theLine);
console.log("* Crew mass: " + (crewMassKg * astronautCount) + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log();
console.log(theLine);
console.log("> FLIGHT PLAN");
console.log(theLine);
console.log("* weather: " + weatherStatus);
console.log();
console.log(theLine);
console.log("> OVERALL STATUS");
console.log(theLine);
console.log("* Clear for takeoff: YES");



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.