// Write your JavaScript code here

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (results) {
       listedPlanets = results;
       console.log(listedPlanets);
        }).then(function () {
       console.log(listedPlanets);    
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let selectPlanet = pickPlanet(listedPlanets);
         addDestinationInfo(document,selectPlanet.name,selectPlanet.diameter,selectPlanet.star,selectPlanet.distance,selectPlanet.moons,selectPlanet.image); {
}
     let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
        form.addEventListener("submit", function(Event) {
            

    Event.preventDefault();

    let pilot= document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    formSubmission(document, pilot.value, copilot.value, fuelLevel.value, cargoMass.value,list);
        })

    })
    
        
   
   });