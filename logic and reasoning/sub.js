// Scenario: Jenny has 92 candies. She gives 35 candies to her friends. How many candies does Jenny have left?
// Scenario: A store had 250 items in stock. After a sale, 87 items were sold. How many items are left in the store?
// Scenario: A gardener planted 400 flowers. Unfortunately, 75 of them didn’t survive. How many flowers are still growing?
// Scenario: In a jar, there were 300 marbles. After a game, 124 marbles were taken out. How many marbles remain in the jar?


// 1. ans

function candies(jenny = 92, gave = 35){
    return jenny - gave;
}

console.log(candies());

// 2. ans

let total = (item, sold)=>{
    return item - sold
};

let item = 250;
let sold = 87;

console.log(total(item, sold));

//  3. ans

function plants(plant,dead){
    return plant - dead
};

let plant = 400;
let dead = 75
console.log(plants(plant,dead));

// 4. ans

function totalMarbles(marbles,takenOut){
    return marbles - takenOut;
}

let marbles = 300;
let takenOut = 124;

console.log(totalMarbles(marbles,takenOut))