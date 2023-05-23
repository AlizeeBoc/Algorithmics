//Write an algorithm which receives an array of integers and prints the position of its minimum.

let a = [365, 95421, -32, 524, 33, -589, 6543];
let min = a[0]
let indexmin = [0];

for (i = 0; i<a.length; i++) {
    if (a[i] < a[0]) {
        min = a[i];
        indexmin=i
    }
}
console.log(indexmin)

