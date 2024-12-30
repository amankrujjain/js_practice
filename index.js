const country = "India";
const continent = "Asia";
let population = 130;

console.log(country,continent,population);

const isIsland = false;

let language = "Hindi";

console.log(typeof(country))
console.log(typeof(continent))
console.log(typeof(population))
console.log(typeof(isIsland))
console.log(typeof(language))
function halfPopulation(population){
    return population /2;
}
console.log(halfPopulation(population));
population++;
console.log(population);

function checkPopulation(){
    let finland = 60
    if(finland > population)
     console.log(true);
    else 
    console.log(false);
}
checkPopulation();

let avgPopulation = 33;

console.log(avgPopulation < population);

let description = `Portugal is in Europe, and its 11 million
people speak portuguese`;


