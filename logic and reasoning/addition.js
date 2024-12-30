// Scenario: Lisa is organizing a book club. She has 24 books, and her friend gives her 17 more. How many books does Lisa have now?
// Scenario: A farmer has 150 cows. He buys 85 more cows to expand his farm. How many cows does the farmer have in total?
// Scenario: A baker made 320 cupcakes in the morning and 180 more in the afternoon. How many cupcakes did the baker make in total?
// Scenario: In a library, there are 567 fiction books and 233 non-fiction books. How many books are there in total?


// 1. ans

function lisa(one,two){
    return one + two
}

const lisaBook = 24;
const friend = 17;

console.log(lisa(lisaBook, friend));


// 2. Ans

let fCows = 150;
let buys = 85;

let total = fCows+buys;

console.log(total)

// 3. ans


function totalCupcakes(morning, afternoon){
    return morning + afternoon;
};

let morning = 320;
let afternoon = 180;

console.log(totalCupcakes(morning,afternoon));

// 4. ans

function totalBooks(a,b){
    return a + b;
};

let fictional = 567;
let nonFictional = 233;

console.log(totalBooks(fictional,nonFictional))


//  Level 2