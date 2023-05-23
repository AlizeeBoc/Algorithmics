
/* A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.*/

let copy=24;

if (copy<10) {
    console.log(10*0.12+"€");
} else if (10<copy<30) {
    console.log(20*0.11+"€")
} else {
    console.log(0.10*copy+"€")
}
