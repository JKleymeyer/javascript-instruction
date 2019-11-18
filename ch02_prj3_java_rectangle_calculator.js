console.log("Welcome to the rectangle calculator");

//loop through 5x
for (let i =1; i<=5; i++) {
    //generate random number
    //Math.floor gets rid of decimals
    let n1 = Math.floor((Math.random()*100)+1);
    let n2 = Math.floor((Math.random()*100)+1);
    //get area and perimeter
    let area = n1*n2;
    let perimeter = (n1*2) + (n2*2);
    //print results
    console.log("i = " + i);
    console.log("n1 = " +n1);
    console.log("n2 = " +n2);
    console.log("Area = " +area);
    console.log("Perimeter = " +perimeter);
    console.log("=======================");
}
