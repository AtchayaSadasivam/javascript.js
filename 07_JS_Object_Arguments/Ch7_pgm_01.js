// Passing a function an object as an argument

var planet1;
var planet2;
var getplanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Mercury",
    position: 1,
    type: "Terrestrial",
    radius: 2440,
    sizeRank: 8
};

getplanetInfo = function (planet) {
    var planetInfo;
    planetInfo =  planet.name + ": planet number " + planet.position;
    planetInfo = "\nType: " + planet.type;
    planetInfo = "\nRadius: " + planet.radius + " km";
    planetInfo = "\nSizeRank: " + planet.sizeRank;

    return planetInfo;
};


console.log(getplanetInfo(planet1));
console.log(getplanetInfo(planet2));



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */