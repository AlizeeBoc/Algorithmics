//Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

let a = [345, 9568, -35, -596, 56, 2, 36,]
let isOrdered=true;

for (let i=1; i<a.length; i++) {
    if (a[i]<a[i-1]) {
        isOrdered=false;
        break;
    }
}

console.log(isOrdered);