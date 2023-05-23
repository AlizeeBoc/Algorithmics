//Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none//


let d1 = 5;
let d2 = 4;
let d3 = 4;

if (d1 === d2 || d1 === d3 || d2 === d3) {
    console.log("two");
} else if (d1 === d2 && d2 === d3) {
    console.log("three");
} else {
    console.log("none");
};