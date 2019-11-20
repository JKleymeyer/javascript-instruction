let readline = require('readline-sync');


console.log("Welcome to the favorite things app v 1.0\n")
//declare empty array
let favorites = [];

//prompt
let choice = "y";
while (choice == "y") {
    console.log("=======Add a Favorite Thing========");

    let id_in = readline.questionInt("Favorite id? ");
    let thing_in = readline.question("Favorite thing? ");
    let why_in = readline.question("Why is it a favorite? ");

    //create favorite
    let favorite = {
        id: id_in,
        thing: thing_in,
        why: why_in
    };

    //add to array
    favorites.push(favorite);

    //repeat
    choice = readline.question("Add another favorite? (y/n)");
}

console.log("\nMy list of favorites: ");
for (let f of favorites) {
    displayFavorite(f);
}

console.log("\nRetrieve a favorited by id");
let idRetrieved = readline.questionInt("Which favorite (by Id) do you want to retrieve?");
for (let f of favorites) {
    if (f.id == idRetrieved) {
        displayFavorite(f);
    }
}


function displayFavorite(f) {
    console.log(`I like ${f.id} - ${f.thing} because ${f.why}.`);
}

console.log("\nBye");