// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
var car1;
var car2;
var buildcar;
var getcarinfo;

// buildPlanet = function (name, position, type, radius, rank) {
//     return {
//         name: name,
//         position: position,
//         type: type,
//         radius: radius,
//         sizeRank: rank
//     };
// };

// getPlanetInfo = function (planet) {
//     return planet.name.toUpperCase() + ": planet " + planet.position;
// };

// planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
// planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

// console.log(getPlanetInfo(planet1));
// console.log(getPlanetInfo(planet2));

buildcar = function (name, model, type, mileage) {
    return {
        name:name,
        model:model,
        type:type,
        mileage:mileage
    };
};

getcarinfo = function (car){
    return car.name.toUpperCase() + ": car " + car.model;
};
car1 = buildcar ("Toyota", "corolla" , "Sedan" , "15000km" );
car2 = buildcar ("Tesla", "Model S" , "Electric" , "5000km");

console.log(getcarinfo(car1));
console.log(getcarinfo(car2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */