//Write an algorithm which receives an array of integers and prints its maximum.

let a = [12, 165, 354, 25, 1032, 5, 188, 40];
let max = a[0];

for (let i = 0, i<a.length, i++) {
    if(a[i]>max) {
        max=a[i];
    }
}
console.log(max)
