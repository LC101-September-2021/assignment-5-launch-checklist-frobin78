// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById('missionTarget');
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}  </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl} ">
   `;
}

function validateInput(testInput) {

let theNumber = Number(testInput);

    if (testInput == "") {
        return "Empty";
      }  
      else if (isNaN(theNumber)){ 
        return "Not a number";
      }
       else if (isNaN(theNumber)===false) {
          return "Is a number";
      }
    
}

function formSubmission(document,pilot,copilot,fuelLevel,cargoMass,list) {
  let fuel = document.getElementById("fuelStatus");
  let cargo = document.getElementById("cargoStatus");
  let pilotStatus= document.getElementById("pilotStatus");
  let copilotStatus= document.getElementById("copilotStatus");
  let launchStatus = document.getElementById("launchStatus");

  if(validateInput(pilot)==="Empty"|| validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoMass)==="Empty") { 
        alert("All fields are required");
        
   } 
    else if (validateInput(pilot)==="Is a number"||validateInput(copilot)==="Is a number"||validateInput(fuelLevel)==="Not a number"||validateInput(cargoMass)==="Not a number") {
        alert("Please enter valid information");  
           
   }  
    else {
     pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
     copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch.`;
     console.log(list);
     list.style.visibility = "visible";
    

     if(fuelLevel<10000 && cargoMass<10000) {
          fuel.innerHTML = "Not enough fuel for launch";
          cargo.innerHTML = "Cargo mass low enough for launch";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = "red";
      }
      else if(fuelLevel>=10000 && cargoMass>10000) {
          fuel.innerHTML = "Fuel level high enough for launch";
          cargo.innerHTML = "Cargo mass is too high for launch";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = "red";    
     }
     else if(fuelLevel<10000 && cargoMass>10000){
          fuel.innerHTML = "Not enough fuel for launch";
          cargo.innerHTML = "Cargo mass is too high for launch";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = "red"; 
      }
      else{
          fuel.innerHTML = "Fuel level high enough for launch";
          cargo.innerHTML = "Cargo mass low enough for launch";
          launchStatus.innerHTML = "Shuttle is ready for launch";
          launchStatus.style.color = "green";
      }

    }    
  }

async function myFetch() {
  let planetsReturned;

    planetsReturned =  await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json(); 
     });
 console.log(planetsReturned);
     return planetsReturned;
} 

function pickPlanet(planets) {
  console.log(planets[0]);
  let index = Math.floor(Math.random()* planets.length);
    console.log (planets[index]);
    return planets[index];

}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;