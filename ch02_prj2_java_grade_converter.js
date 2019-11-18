console.log("Welcome to the grade converter");

//loop through 5 iterations
for( let i=1; i<=5; i++) {
    //generate random number between 60 and 100
    let percentage = Math.floor((Math.random()*41)+60);
    console.log("Numeric grade = " + percentage);
    let letterGrade = "F";
    if (percentage>=88) {
        letterGrade="A";
    } else if (percentage>=80) {
        letterGrade="B"
    } else if (percentage>=67) {
        letterGrade="C"
    } else if (percentage>=60) {
        letterGrade="D"
    }
    console.log("Letter Grade = "+letterGrade);
}